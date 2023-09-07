import { Box, Typography } from "@mui/material";
import IWeatherBoxIProps from "../helpers/Types";

const WeatherConditions = ({ weather }: IWeatherBoxIProps): JSX.Element => {
  return (
    <>
      <Box className="weather-conditions">
        <Typography className="weather humidity">Humidity: {weather?.main?.humidity}</Typography>
        <Typography className="weather max-temp">Max temperature: {weather?.main?.temp_max}</Typography>
        <Typography className="weather min-temp">Min temperature: {weather?.main?.humidity}</Typography>
        <Typography className="weather pressure">Pressure: {weather?.main?.pressure}</Typography>
        <Typography className="weather wind-degrees">Wind degrees: {weather?.wind?.deg}</Typography>
        <Typography className="weather wind-speed">Wind speed: {weather?.wind?.speed}</Typography>
      </Box>
    </>
  );
};

export default WeatherConditions;
