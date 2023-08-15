import React from "react";

// city: data.name,
// temp: data.main.temp,
// description: data.weather[0].description,
// feels_like: data.main.feels_like,
// humidity: data.main.humidity,
// wind: data.wind.speed,

import classes from "./Weather.module.css";

const Weather = ({ data }) => {
  return (
    <div>
      <div className="text-center my-20 text-white">
        <h1 className="text-7xl my-2">{data ? data.name : ""}</h1>
        <h4 className="text-4xl my-2">
          {data ? <span>{data.main.temp} &deg;C</span> : ""}
        </h4>
        <p className="text-2xl my-2 capitalize">
          {data ? data.weather[0].description : ""}
        </p>
      </div>
      <div className="text-white absolute bottom-28 w-full text-center">
        {data && (
          <div
            className={`flex justify-center text-center rounded md:max-w-sm mx-auto py-2 px-1 ${classes.bottom}`}
          >
            <div className="flex flex-col">
              <span>{data.main.feels_like}&deg;C</span>
              <span>Hissedilen</span>
            </div>
            <div className="flex flex-col">
              <span>{data.main.humidity}%</span>
              <span>Nem</span>
            </div>
            <div className="flex flex-col">
              <span>{data.wind.speed} km/s</span>
              <span>Rüzgar </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
