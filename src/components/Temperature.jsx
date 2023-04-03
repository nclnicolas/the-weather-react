import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import style from "../styles/temperature.module.css";

const Temperature = ({ weatherData }) => {
  const image = weatherData.current.weather_icons[0];
  const descriptionWeather = weatherData.current.weather_descriptions[0];

  const selectionStyle = () => {
    return descriptionWeather === "Sunny"
      ? style.sunny
      : descriptionWeather === "Partly cloudy"
      ? style.partlyCloudy
      : descriptionWeather === "Overcast"
      ? style.overcast
      : descriptionWeather === "Light rain" ||
        descriptionWeather === "Moderate rain" ||
        descriptionWeather === "Heavy rain" ||
        descriptionWeather === "Light Drizzle And Rain" ||
        descriptionWeather === "Rain With Thunderstorm"
      ? style.rain
      : descriptionWeather === "Mist" || descriptionWeather === "Fog"
      ? style.mistFog
      : descriptionWeather === "Light snow" ||
        descriptionWeather === "Moderate snow" ||
        descriptionWeather === "Heavy snow"
      ? style.snow
      : descriptionWeather === "Thunderstorm"
      ? style.thunderstorm
      : style.container;
  };

  return (
    <div className={`${selectionStyle()} ${style.container}`}>
      <img src={image} alt="Clima" />

      <p className={style.temperature}>{weatherData.current.temperature}°</p>

      <p className={style.location}>
        <LocationOnIcon /> {weatherData.location.name},{" "}
        {weatherData.location.country}
      </p>
    </div>
  );
};

export default Temperature;
