
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Update the weather data with the given input
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
