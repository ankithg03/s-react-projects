import React from "react";

const DisplayComponent = (prop) => {
    if (prop.resp?.coord) {
        return (
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <ul>
                    {/* <li>{prop.coord.resp}</li> */}
                    <li>latitude: {prop.resp.coord.lat}</li>
                    <li>longitude: {prop.resp.coord.lon}</li>
                    <li>Country: {prop.resp.sys.country}</li>
                    <li>Weather: {prop.resp.weather.map((weather) => weather.main)}</li>
                </ul>
            </div>
        )
    }
    else if(prop.resp.cod === '404'){
        return(
        <div>city not found</div>
        )
    }
}

export default DisplayComponent
