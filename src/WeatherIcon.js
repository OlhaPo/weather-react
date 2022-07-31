import React from "react";

export default function WeatherIcon(props) {
  function getIconUrl() {
    return `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  }

  return (
    <div className="WeatherIcon">
      <img src={getIconUrl()} alt={props.alt} />
    </div>
  );
}
