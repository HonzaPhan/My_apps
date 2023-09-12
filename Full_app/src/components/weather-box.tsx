import { Box, Typography } from "@mui/material";
import { IWeatherBoxIProps } from "../helpers/Types";

const WeatherBox = ({ weather }: IWeatherBoxIProps): JSX.Element => {
  return (
    <>
      <Box className="location-box">
        <Typography className="location">
          {weather?.name}, {weather?.sys?.country}
        </Typography>
      </Box>
      <Box className="weather-box">
        <Typography className="temp">{weather?.main?.temp}°C</Typography>
        <Typography className="weather-type">
          {weather?.weather?.length > 0 && weather?.weather[0].main}
        </Typography>
      </Box>
    </>
  );
};

export default WeatherBox;
