import React, { useState } from "react";

const SubString = () => {

    const [result, setResult] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
        console.log('value', typeof (event.target[0].value))

        const mainString = event.target[0].value
        let num = 6
        let tempResult = []
        if (mainString?.length && !/^\d+$/.test(mainString)) { //
            for (let i = 0; i < num; i++) {
                console.log('-----------------------------------')
                let resultString = ''
                for (let j = i; (j < num + i) && (j < mainString.length); j++) {
                    resultString += mainString[j]
                    tempResult = [...tempResult, resultString]
                    console.log('resultString', resultString, 'tempResult', tempResult)
                }
            }
            setResult(tempResult)
        }
        else {
            alert('Please enter the string')
        }
    }

    console.log('rrrr', result)

    return (
        <div>
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <div className="mx-5 sm:mx-10">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="substring" className="block text-sm font-medium leading-6 text-gray-900">Enter the String</label>
                                <div className="mt-2">
                                    <input type="text" name="substring" id="substring" autoComplete="given-substring" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 flex items-center gap-x-6">
                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="result-container mx-5 sm:mx-10 mt-4">
                <span className="font-semibold">{result.length ? 'Substrings: ' : ''}</span>{result.sort().join(', ')}
            </div>
        </div>
    )
}

export default SubString