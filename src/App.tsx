import React from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n"; // Import i18n configuration
import WeatherImg from "./assets/weather.png";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App flex-row">
      <div className="weather-img">
        <img src={WeatherImg} alt="Weather" />
      </div>
      <div className="weather-content">
        <WeatherForm />
        <LanguageSwitcher />
        <WeatherDisplay />
      </div>
    </div>  
  );
};

export default App;
