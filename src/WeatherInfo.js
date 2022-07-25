import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
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
          {Math.round(props.weather.temperature)}
        </div>

        <div className="col-4 unit-buttons text-start">
          <button type="button" className="btn btn-link degree-active">
            °C
          </button>
          <span>|</span>
          <button type="button" className="btn btn-link">
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
