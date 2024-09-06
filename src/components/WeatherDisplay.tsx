import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useTranslation } from "react-i18next";
import "../App.css";

const WeatherDisplay: React.FC = () => {
  const weather = useSelector((state: RootState) => state.weather);
  const { t } = useTranslation();

  if (weather.status === "loading") return <p>{t("loading")}</p>;
  if (weather.status === "failed") return <p className="error">{t("error")}</p>;

  if (!weather.data) return null;

  // Extract weather data
  const { description, icon } = weather.data.weather[0];
  const { temp } = weather.data.main;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className="weather-container">
      <h2>{t("current_weather")}:</h2>
      <div className="weather-summary">
        <img src={iconUrl} alt={description} className="weather-icon" />
        <p>
          <strong>{t("temperature")}:</strong> {temp} °C
        </p>
        <p className="capitalize-first-letter">
          <strong>{t("condition")}:</strong> {description}
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
