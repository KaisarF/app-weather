import React from "react";

const ShowWeather = ({data}) => {
    return(
        <div className="w-32 flex mx-auto flex justify-center items-center flex-col  mt-8">
            <h2>{data.name}</h2>
            <div>
                <img
                    src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    alt="weather image"
                />
            </div>
            <div>
                <span> {data.weather[0].main}  </span> &nbsp;
                <span> {Math.floor(data.main.temp)}&deg;c </span>
            </div>
        </div>
    )
}
export default ShowWeather;   