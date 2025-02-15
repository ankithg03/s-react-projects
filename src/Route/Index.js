import  React, {useState} from "react"
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./routeStyle.css"

import logo from '../icon/project_icon.png'
import HomePage from "../Page/Index";
import PetrolPumpPage from "../Page/PetrolPump"
import SubString from "../Page/SubString";
import CollapsableComponent from "../Page/CollapsableComponent"
import DarkModeComponent from "../Page/DarkModeComponent/index"
import WeatherForecastingComponent from "../Page/WeatherForecastingComponent";
import SliderComponent from "../Page/SliderComponent";
import RegisterComponent from "../Page/RegisterComponent";

const RouteComponent = () => {
    const [navVis, setNavVis] = useState()
    const handleCopy = (event) => {
        event.preventDefault()
        let url = window.location?.href
        navigator?.clipboard?.writeText(url).then(function() {
            console.log('Copied!');
            toast.success('Copied!..');

        }, function() {
            
            console.log('Copy error')
        });
    }

    const toggleNavbar = () =>{
        setNavVis(!navVis)
        console.log('aaa')
    }

    return (
        <Router>
            <div>

                {/* -------------------------------------------------------------------------Header */}

                <nav className="relative flex flex-wrap items-center justify-between px-0 header-bg">
                    <div className="container mx-auto flex flex-wrap items-center justify-between">

                        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
                            <img src={logo} className="logo w-20" alt="test"/>
                        </Link> 

                            <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={toggleNavbar}>
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className={navVis?"lg:flex flex-grow items-center":"lg:flex flex-grow items-center hidden"} id="example-collapse-navbar">
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-m font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        <i className="fa-brands fa-linkedin text-lg leading-lg text-white opacity-75" ></i><span className="ml-2">LinkedIn</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-m font-bold leading-snug text-white hover:opacity-75" href="#pablo" onClick={handleCopy}>
                                        <i className="fa-solid fa-copy text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Copy</span>
                                    </a>
                                </li>

                                {/* <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                                    </a>
                                </li> */}

                            </ul>
                        </div>

                    </div>
                </nav>


                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/petrol-pump" element={<PetrolPumpPage />} />
                    <Route path="/sub-string" element={<SubString />} />
                    <Route path="/movie-time" element={<CollapsableComponent />} />
                    <Route path="/dark-mode" element={<DarkModeComponent />}/>
                    <Route path="/weather-component" element={<WeatherForecastingComponent />} />
                    <Route path="/slider-component" element={<SliderComponent />} />
                    <Route path="/register-component" element={<RegisterComponent />} />
                </Routes>
            </div>
        </Router>
    )
}

export default RouteComponent