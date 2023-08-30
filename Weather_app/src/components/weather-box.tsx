import IWeatherBoxIProps from "../helpers/Types";

const WeatherBox = ({ weather }: IWeatherBoxIProps): JSX.Element => {
  return (
    <>
      {" "}
      {/* React fragment */}
      <div className="location-box">
        <div className="location">
          {weather?.name}, {weather?.sys?.country}
        </div>
        <div className="date"></div>
      </div>
      <div className="weather-box">
        <div className="temp">{weather?.main?.temp}°C</div>
        <div className="weather">
          {weather?.weather?.length > 0 && weather?.weather[0].main}
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
