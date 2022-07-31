import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({
    isReady: false,
  });

  function showWeather(response) {
    setWeather({
      isReady: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
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

  if (weather.isReady) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control shadow-sm search-input"
                autoFocus="on"
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
        <WeatherInfo weather={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    getWeather();
    return "Loading...";
  }
}
