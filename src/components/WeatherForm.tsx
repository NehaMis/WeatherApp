// WeatherForm.tsx
import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";
import { useTranslation } from "react-i18next";
import "./WeatherForm.css";

const WeatherForm: React.FC = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Clear previous errors
    setError(null);
    
    // Validate input
    if (city.trim() === '') {
      setError(t("city_required"));
      return;
    }

    const cityNumber = Number(city);

    // Check if input is a valid number
    const isValid = /^[a-zA-Z]+$/.test(city);
    if (!isValid) {
      setError(t("invalid_city"));
      return;
    }
    // Check length (assuming length means number of digits in this context)
    if (city.length < 1 || city.length > 20) { 
      setError(t("city_length_error"));
      return;
    }

    // Clear error and submit
    dispatch(fetchWeather(cityNumber.toString()) as any); 
  };

  // Check if the input field is empty
  const isButtonDisabled = city.trim() === "";

  return (
    <form onSubmit={handleSubmit}>
      <h1>{t("weather_app")}</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder={t("enter_city")}
        className="custom-input"
      />
      {error && <p className="error-message">{error}</p>}
      <button className="get-weather" type="submit" disabled={isButtonDisabled}>
        {t("get_weather")}
      </button>
    </form>
  );
};

export default WeatherForm;
