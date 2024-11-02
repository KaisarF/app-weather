import React from "react";

const Weather =( {cities, handleSelectCity} ) => {
    return(
        <div className="w-full mx-auto flex justify-center items-center px-40" >
            <h2 className="my-3 w-full" >current weather</h2>

            <select 
            onChange={handleSelectCity}
            className="block appearence-none w-full bg-gray-200 border border-gray-300 text-gray-600 py-3 px-4 pr-8 rounded leading-tight text-center">
                {cities.length > 0 && 
                cities.map((city) => <option key={city} > {city} </option>)}
            </select>

        </div>
    )
}

export default Weather;