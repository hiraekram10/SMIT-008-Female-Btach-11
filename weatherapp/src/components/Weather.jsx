import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18196adb736a0ff23b9fa214ca394629&units=metric`
      );
      setWeatherData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
        />
        <button onClick={getWeather}>get weather</button>
      </div>

      {
        (weatherData)?<div>
        <p>city name {weatherData?.name} </p>
        <p>country {weatherData?.sys?.country} </p>
        <p>temp {weatherData?.main?.temp} </p>
        <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" />

      
        <p>humidity {weatherData?.main?.humidity} </p>
      </div>:""
      }
    </>
  );
};

export default Weather;
