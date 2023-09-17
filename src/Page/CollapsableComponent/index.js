import React, { Component } from "react";
import CollapsableComponent from "./collapsableComponent";
import {data} from "./dataToDispaly";

class App extends Component {
    render(){
        console.log(data)
        return(
            <div>
                {/* <CollapsableComponent collapsableData = {data}/> */}
                {data.map((item) => (<CollapsableComponent question = {item.question} answer = {item.answer} img = {item.img}/>))}
            </div>
        )
    }
}

export default App