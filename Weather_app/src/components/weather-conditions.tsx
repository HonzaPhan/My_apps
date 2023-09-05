import IWeatherBoxIProps from "../helpers/Types";

const WeatherConditions = ({ weather }: IWeatherBoxIProps): JSX.Element => {
  return (
    <>
      <div className="weather-conditions">
        <div className="humidity">Humidity: {weather?.main?.humidity}</div>
        <div className="max-temp">Max temperature: {weather?.main?.temp_max}</div>
        <div className="min-temp">Min temperature: {weather?.main?.humidity}</div>
        <div className="pressure">Pressure: {weather?.main?.pressure}</div>
        <div className="wind-degrees">Wind degrees: {weather?.wind?.deg}</div>
        <div className="wind-speed">Wind speed: {weather?.wind?.speed}</div>
      </div>
    </>
  );
};

export default WeatherConditions;
