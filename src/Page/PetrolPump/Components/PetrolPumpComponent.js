import React from "react";
import GraphComponent from "./GraphComponent"

const PetrolPumpComponent = () => {
    const data = [{ name: 'A', fuel: 20, dist: 20 },
    { name: 'B', fuel: 20, dist: 20 },
    { name: 'C', fuel: 40, dist: 50 },
    { name: 'D', fuel: 30, dist: 30 },
    { name: 'E', fuel: 50, dist: 20 },
    { name: 'F', fuel: 40, dist: 60 }
    ]

    const solution = () => {
        let solutions = []
        data.every((firstLoopElement, firstLoopIndex) => {
            let currentFuel = 0
            console.log('----------------First Loop -', firstLoopElement.name, '----------------First Loop Index-', firstLoopIndex)
            let solution = []
            data.every((secondLoopElement, secondLoopIndex) => {
                let customIndex = firstLoopIndex + secondLoopIndex
                if (customIndex >= data.length) {
                    customIndex = customIndex - data.length
                }
                console.log('customIndex', customIndex, data[customIndex])
                solution.push(data[customIndex].name)
                currentFuel = (data[customIndex]?.fuel - data[customIndex]?.dist) + currentFuel
                if (currentFuel < 0) {
                    currentFuel = 0
                    return false
                } else {

                }

                return true
            })
            if (solution.length === data.length) {
                solutions.push(solution.join('-'))
                // return false;
            }
            return true;

        });
        return <div>
            {solutions.map((solution, index) => <div>{index + 1} - {solution}</div>)}
        </div>
    }

    return (
        <div className="mx-20">
            <h1 className="text-center">Circular tour to visit all the petrol pumps</h1>
            <div className="py-10">
                <GraphComponent />
            </div>
            <div className="px-10 py-5">
                <p>Please find the solution below,</p>
                {solution()}
            </div>
        </div>
    )
}

export default PetrolPumpComponent