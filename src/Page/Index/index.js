import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"
import CardComponent from "./cardComponent"
import fuelImage from "../../images/Fuel.jpg"
import subString from "../../images/SubString.png"

const IndexPage = () => {
    return (
        <div className="mx-20">My Project Links
            <div className="grid grid-cols-3 gap-10 my-3">
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

            </div>
        </div>
    )
}

export default IndexPage