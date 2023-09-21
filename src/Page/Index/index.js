import React from "react";
// import { Link } from 'react-router-dom';
import "./style.css"
import CardComponent from "./cardComponent"
import fuelImage from "../../images/Fuel.jpg"
import subString from "../../images/SubString.png"
import CCImage from "../../images/collapsiblecomponent.svg"
import darkMode from "../../images/darkmode.webp"
import weather from "../../images/weather.jpg"
import slider from "../../images/slider.avif"
import register from "../../images/registerform.jpg"

const IndexPage = () => {
    return (
        <div className="mx-20">My Project Links
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 my-3 md:grid-cols-2 lg:groid-col-3 ">
                {/* -------------------------------------------------------------------------Cards */}

                {/* ---------------------------------card -1 */}
                <CardComponent
                    name="Circular tour Algorithm"
                    desc="A circular tour to visit all the petrol pumps."
                    tech="HTML, CSS, JS, React"
                    link="/petrol-pump"
                    imageSrc={fuelImage}
                />

                {/* ---------------------------------card -2 */}
                <CardComponent
                    name="Finding the substring "
                    desc="Susbstring of a string without using default methods."
                    tech="HTML, CSS, JS, React"
                    link="/sub-string"
                    imageSrc={subString}
                />

                {/* ---------------------------------card -3 */}
                <CardComponent
                    name="Kannada Movie Briefing"
                    desc="Simple task which includes the concept of collapsible component"
                    tech="HTML, CSS, JS, React"
                    link="/movie-time"
                    imageSrc={CCImage}
                />

                {/* ---------------------------------card -4 */}
                <CardComponent
                    name="Login Page"
                    desc="The task which includes the concept of toggle button"
                    tech="HTML, CSS, JS, React"
                    link="/dark-mode"
                    imageSrc={darkMode}
                />

                {/* ---------------------------------card -4 */}
                <CardComponent
                    name="weather forecasting"
                    desc="By providing city name we can get to know the weather of that particular city"
                    tech="HTML, CSS, JS, React"
                    link="/weather-component"
                    imageSrc={weather}
                />

                {/* ---------------------------------card -5 */}
                <CardComponent
                    name="sliding window"
                    desc="sliding component"
                    tech="HTML, CSS, JS, React"
                    link="/slider-component"
                    imageSrc={slider}
                />

                {/* ---------------------------------card -5 */}
                <CardComponent
                    name="registration form"
                    desc="registration form"
                    tech="HTML, CSS, JS, React"
                    link="/register-component"
                    imageSrc={register}
                />
            </div>
        </div>
    )
}

export default IndexPage