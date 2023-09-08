import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"
import CardComponent from "./cardComponent"
import fuelImage from "../../images/Fuel.jpg"
import subString from "../../images/SubString.png"

const IndexPage = () => {
    return (
        <div className="mx-20">My Project Links
            <div className="grid grid-cols-3 gap-20 my-3">
                {/* -------------------------------------------------------------------------Cards */}

                {/* ---------------------------------card -1 */}
                <CardComponent
                    name="Noteworthy technology acquisitions 2021"
                    desc="HTML, CSS, JS, React"
                    link="/petrol-pump"
                    imageSrc={fuelImage}
                />

                {/* ---------------------------------card -2 */}             
                <CardComponent 
                    name="Noteworthy technology acquisitions 2021"
                    desc="HTML, CSS, JS, React"
                    link="/sub-string"
                    imageSrc={subString}
                />

            </div>
        </div>
    )
}

export default IndexPage