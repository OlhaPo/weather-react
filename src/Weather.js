import React from "react";
import axios from "axios";

export default function Weather() {
  function showWeather(response) {
    alert(`The weather in New York is ${response.data.main.temp}C`);
  }

  let apiKey = `36b22067e3dcdcc365ae1ae08b781c20`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);

  return <h2>Today's Weather</h2>;
}
