import React, { useState } from "react";
import DisplayComponent from "./DisplayComponent"

import "./index.css"

const WeatherForecastingComponent = () => {
    const API_KEY = 'bfc25e0228b32c1df3885f94e1edde8e'
    const [city, setCity] = useState('')
    const [resp, setResp] = useState('')

    const handleClick = (event) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && (this.status === 200 || this.status === 404)) {
                const respFromXhttp = JSON.parse(xhttp.responseText)
                setResp(respFromXhttp)                
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    console.log(resp)

    return (
        <div>
            <h2 className="header">API Example 1 - Weather Forecasting App</h2>
            <div className="form">
                <input
                    type="text"
                    name="city"
                    onChange={e => setCity(e.target.value)}>
                </input>

                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick}>
                    Search!
                </button>
            </div>

            <div className="weather-report">
                <DisplayComponent resp = {resp} />
            </div>
        </div>
    )
}

export default WeatherForecastingComponent
