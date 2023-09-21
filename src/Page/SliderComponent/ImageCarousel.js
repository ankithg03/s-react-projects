import React, {useRef} from "react";
import MyCard from "./MyCard"
import elephant_1 from "./images/elephant_1.jpg"
import elephant_2 from "./images/elephant_2.jpg"
import elephant_3 from "./images/elephant_3.jpg"
import elephant_4 from "./images/elephant_4.jpg"
import elephant_5 from "./images/elephant_5.jpg"
import elephant_6 from "./images/elephant_6.jpg"
import elephant_7 from "./images/elephant_7.jpg"
import "./ImageCarousel.css"

const ImageCarousel = () => {

    const boxElement = useRef();
    // const box = document.querySelector(".product-container")

    const handleClickPrev = () => {
        let width = boxElement.current.clientWidth
        console.log('boxElement',boxElement.current, 'width', width)
        boxElement.current.scrollLeft = boxElement.current.scrollLeft - (width/2)
        console.log('width',width)
    }

    const handleClickNext = () => {
        let width = boxElement.current.clientWidth
        boxElement.current.scrollLeft = boxElement.current.scrollLeft + (width/2)
        console.log('width',width)
    }

    return(
        <div className="product-carousel">
            <button className="pre-btn" onClick={handleClickPrev}>  
                <p>&lt;</p>
            </button>
            <button className="next-btn" onClick={handleClickNext}>
                <p>&gt;</p>
            </button>

            <div className="product-container" ref={boxElement}>
                <MyCard cardno = '1' img={elephant_1}/>
                <MyCard cardno = '2' img={elephant_2}/>
                <MyCard cardno = '3' img={elephant_3}/>
                <MyCard cardno = '4' img={elephant_4}/>
                <MyCard cardno = '5' img={elephant_5}/>
                <MyCard cardno = '6' img={elephant_6}/>
                <MyCard cardno = '7' img={elephant_7}/>
            </div>
        </div>
    )
}

export default ImageCarousel
