import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/languageSlice";
import { RootState } from "../store";
import { useTranslation } from "react-i18next";
import "../App.css";


const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex">
      <button
        className={`btn ${currentLanguage === "en" ? "active" : ""}`}
        onClick={() => handleLanguageChange("en")}
        disabled={currentLanguage === "en"}
      >
        English
      </button>
      <button
        className={`btn ${currentLanguage === "es" ? "active" : ""}`}
        onClick={() => handleLanguageChange("es")}
        disabled={currentLanguage === "es"}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
