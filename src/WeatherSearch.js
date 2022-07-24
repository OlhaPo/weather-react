import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const defaultWeather = {
    city: "Kyiv",
    temperature: 30,
    description: "Sunny",
    humidity: 42,
    wind: 3,
    icon: `http://openweathermap.org/img/wn/01d@2x.png`,
  };
  let [city, setCity] = useState("Kyiv");
  let [weather, setWeather] = useState(defaultWeather);

  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      getWeather();
    } else {
      setWeather();
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeather() {
    let apiKey = `36b22067e3dcdcc365ae1ae08b781c20`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control shadow-sm search-input"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm submit-button"
            />
          </div>
        </div>
      </form>
      <h1 className="weather-heading">{weather.city}</h1>
      <h2 className="weather-subheading">Wednesday 12:00</h2>

      <ul>
        <li>{weather.description}</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {Math.round(weather.wind)} km/h</li>
      </ul>

      <div className="row current-weather">
        <div className="col-4 text-end">
          <img src={weather.icon} alt={weather.description} />
        </div>

        <div className="col-4 current-temperature text-end">
          {Math.round(weather.temperature)}
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
