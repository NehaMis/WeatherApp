# Getting Started with Create React App

This project is a weather application built using React, TypeScript, and Redux, bootstrapped with Create React App. It fetches and displays weather data from the OpenWeatherMap API and supports internationalization with react-i18next.

# Prerequisites
Node.js: Ensure Node.js is installed on your machine. You can download it from nodejs.org.
npm: Node Package Manager comes with Node.js.
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/weather-app.git
cd weather-app
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables

Create a .env file in the root directory of the project with the following content:

env
Copy code
REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key_here
Replace your_openweather_api_key_here with your actual API key from OpenWeatherMap.

# Available Scripts
In the project directory, you can run:

npm start: Runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes, and you may see any lint errors in the console.

npm test: Launches the test runner in interactive watch mode. See the Create React App testing documentation for more information.

npm run build: Builds the app for production to the build folder. The build is optimized for the best performance and is ready to be deployed. The filenames include hashes for caching purposes.

npm run eject: Note: This is a one-way operation. If you are not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project and copy all configuration files and dependencies into your project, giving you full control.

# How to Use
Start the Development Server

bash
Copy code
npm start
View the App

Open http://localhost:3000 in your browser to interact with the weather app.

Search for Weather

Enter a city name in the provided input field and click the "Get Weather" button to fetch and display the weather data.

Switch Languages

Use the language switcher to toggle between English and Spanish. The interface and weather information will update accordingly.

# Code Overview
Components:

WeatherForm.tsx: Contains the form for city input and submission.
WeatherDisplay.tsx: Displays the fetched weather information.
LanguageSwitcher.tsx: Allows users to switch between English and Spanish.
Redux:

Actions: Contains actions like fetchWeather for handling API requests.
Reducers: Manages the state for weather data and language settings.
Store: Configures the Redux store.
Internationalization:

Uses react-i18next for multi-language support. Translation files are located in the public/locales directory.
API Integration:

Fetches weather data from OpenWeatherMap using the fetchWeather action.

# Troubleshooting
Backend Not Available: If the OpenWeatherMap API is down or unreachable, the app will display an error message.
Invalid API Key: Ensure your API key is correctly configured in the .env file and is valid.
