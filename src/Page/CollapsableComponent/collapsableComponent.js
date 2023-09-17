import React, { Component } from "react";
import "../CollapsableComponent/CollapsableComponent.css";

class CollapsableComponent extends Component {
    constructor() {
        super()
        this.state = {
            expand: false
        }
    }
    handleClickPlus = () => (this.setState({
        expand: true
    }))
    handleClickMinus = () => {
        this.setState({
            expand: false
        })
    }

    render() {
        return (
            <div className="w-full max-w-lg p-4 m-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{this.props.question}</h2>
                    <button className={!this.state.expand ? 'Active' : 'inActive'} onClick={this.handleClickPlus}>+</button>
                    <button className={this.state.expand ? 'Active' : 'inActive'} onClick={this.handleClickMinus}>-</button>
                    
                </div>

                <div className="content-display">
                    <div className={this.state.expand ? 'Active' : 'inActive'}>
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={this.props.img} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.question}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.props.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CollapsableComponent