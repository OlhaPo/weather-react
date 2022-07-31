import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="row">
        <div className="col-5 text-start">{day()}</div>
        <div className="col-3 text-start">
          <WeatherIcon icon={props.data.weather[0].icon} alt={""} />
        </div>
        <div className="col-3 column-temp text-end">
          <span className="extended-forecast-temp-max">{maxTemp()}</span>
        </div>
        <div className="col-1 column-temp text-start">
          <span className="extended-forecast-temp-min">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
