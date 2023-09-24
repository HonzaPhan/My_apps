import { IWeatherBox, IWeatherBoxIProps } from "../helpers/Types";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";

const WeatherMiniCard = ({ weather }: IWeatherBoxIProps): JSX.Element => {
  const {
    name,
    sys: { country },
    main: { temp, humidity, temp_max, temp_min, pressure },
    weather: [{ main }],
    wind: { deg, speed },
  } = weather;

  const dispatch = useDispatch();

  const saveCurrentWeather = (weather: IWeatherBox) => {
    // dispatch(saveCurrentWeather(weather));
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
          backgroundColor: "yellow",
        }}
      >
        <Typography color="initial">Country: {country}</Typography>
        <Typography color="initial">City: {name}</Typography>
        <Typography color="initial">Temp: {temp}°</Typography>
        <Typography color="initial">It is: {main}</Typography>
      </Box>
    </>
  );
};

export default WeatherMiniCard;
