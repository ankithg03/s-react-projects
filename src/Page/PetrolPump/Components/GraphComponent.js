import React from 'react'
import "../Components/GraphComponent.css"

const GraphComponent = () => {
    return (<>
        <table className="mx-auto" border="1">
            <tr>
                <td></td>
                <td>
                    <div className='grid grid-cols-2 nodes text-center' style={{ background: "#333652", color:'white'}}>
                        <div className='col-span-2 eachCell nodeName'>A</div>
                        <div className='eachCell'>d</div>
                        <div className='eachCell'>f</div>
                        <div className='eachCell'>20</div>
                        <div className='eachCell'>20</div>
                    </div>
                </td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>

                <td>
                    <div className='grid grid-cols-2 nodes text-center' style={{ background: "#333652", color:'white'}}>
                        <div className='col-span-2 eachCell nodeName'>F</div>
                        <div className='eachCell'>d</div>
                        <div className='eachCell'>f</div>
                        <div className='eachCell'>60</div>
                        <div className='eachCell'>40</div>
                    </div>
                </td>
                <td></td>
                <td>
                    <div className='grid grid-cols-2 nodes text-center' style={{ background: "#333652", color:'white'}}>
                        <div className='col-span-2 eachCell nodeName'>B</div>
                        <div className='eachCell'>d</div>
                        <div className='eachCell'>f</div>
                        <div className='eachCell'>20</div>
                        <div className='eachCell'>20</div>
                    </div>
                </td>
            </tr>

            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td>
                    <div className='grid grid-cols-2 nodes text-center' style={{ background: "#333652", color:'white'}}>
                        <div className='col-span-2 eachCell nodeName'>E</div>
                        <div className='eachCell'>d</div>
                        <div className='eachCell'>f</div>
                        <div className='eachCell'>20</div>
                        <div className='eachCell'>50</div>
                    </div>
                </td>
                <td></td>
                <td>
                    <div className='grid grid-cols-2 nodes text-center' style={{ background: "#333652", color:'white'}}>
                        <div className='col-span-2 eachCell nodeName'>C</div>
                        <div className='eachCell'>d</div>
                        <div className='eachCell'>f</div>
                        <div className='eachCell'>50</div>
                        <div className='eachCell'>40</div>
                    </div>
                </td>
            </tr>

            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td>
                    <div className='grid grid-cols-2 nodes text-center' style={{ background: "#333652", color:'white'}}>
                        <div className='col-span-2 eachCell nodeName'>D</div>
                        <div className='eachCell'>d</div>
                        <div className='eachCell'>f</div>
                        <div className='eachCell'>30</div>
                        <div className='eachCell'>30</div>
                    </div>
                </td>
                <td></td>
            </tr>
        </table></>
    )
}
export default GraphComponent;
