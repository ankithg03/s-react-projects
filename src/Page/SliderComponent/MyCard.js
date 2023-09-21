import React from "react";
import "./MyCard.css"
const MyCard = (props) => {
    return(
        <div className="mycard">
            <div className="image-container">
            <img src={props?.img}/>
            </div>
        </div>
    )
}

export default MyCard

