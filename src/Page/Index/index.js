import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"

const IndexPage = () => {
    return(
        <div>My Project Links
            <div>
                <Link className="item" to="/petrol-pump">Petrol Pump</Link>
                <Link className="item" to="/sub-string">Sub-String</Link>      
            </div>
        </div>
    )
}

export default IndexPage