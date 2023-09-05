import { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/search-input";
import WeatherBox from "./components/weather-box";
import { IWeatherBox } from "./helpers/Types";
import WeatherConditions from "./components/weather-conditions";

function App() {
  const API = {
    key: "09590f95afc6e554006c455c4b8fa021",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState<IWeatherBox>({
    name: "",
    sys: {
      country: "",
    },
    main: {
      temp: 0,
      humidity: 0,
      temp_max: 0,
      temp_min: 0,
      pressure: 0,
    },
    weather: [
      {
        main: "",
      },
    ],
    wind: {
      deg: 0,
      speed: 0,
    },
  });

  useEffect(() => {
    getWeatherValue("Prague");
  }, []);

  const getWeatherValue = (query: string): void => {
    fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`app ${
        weather?.main?.temp && weather?.main?.temp > 20 && "warm"
      }`}
    >
      <main>
        <WeatherBox weather={weather} />
        <WeatherConditions weather={weather} />
        <SearchInput getWeatherValue={getWeatherValue} />
      </main>
    </div>
  );
}

export default App;
