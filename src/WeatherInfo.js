import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let [unit, setUnit] = useState("celsius");

  function changeUnit(newUnit) {
    setUnit(newUnit);
  }

  function showTemperature() {
    let result;
    if (unit === "celsius") {
      result = props.weather.temperature;
    } else {
      result = (props.weather.temperature * 9) / 5 + 32;
    }
    return Math.round(result);
  }

  return (
    <div className="WeatherInfo">
      <h2 className="weather-subheading">
        <FormattedDate date={props.weather.date} />
      </h2>

      <ul>
        <li>{props.weather.description}</li>
        <li>Humidity: {props.weather.humidity}%</li>
        <li>Wind: {Math.round(props.weather.wind)} km/h</li>
      </ul>

      <div className="row current-weather">
        <div className="col-4 text-end">
          <img src={props.weather.icon} alt={props.weather.description} />
        </div>
        <div className="col-4 current-temperature text-end">
          {showTemperature()}
        </div>
        <div className="col-4 unit-buttons text-start">
          <button
            type="button"
            className={
              "btn btn-link " + (unit === "celsius" ? "degree-active" : "")
            }
            onClick={function () {
              changeUnit("celsius");
            }}
          >
            °C
          </button>
          <span>|</span>
          <button
            type="button"
            className={
              "btn btn-link " + (unit === "fahrenheit" ? "degree-active" : "")
            }
            onClick={function () {
              changeUnit("fahrenheit");
            }}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
