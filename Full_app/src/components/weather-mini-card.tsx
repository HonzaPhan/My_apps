import { IWeatherBoxIProps } from "../helpers/Types";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { RootState } from "../state/store";

const WeatherMiniCard = ({ weather }: IWeatherBoxIProps): JSX.Element => {
  const data = useSelector((state: RootState) => state.currentWeatherReducer);

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
        <Typography color="initial">Country: {data.sys.country}</Typography>
        <Typography color="initial">City: {data.name}</Typography>
        <Typography color="initial">Temp: {data.main.temp}°</Typography>
        <Typography color="initial">It is: {data.weather[0].main}</Typography>
      </Box>
    </>
  );
};

export default WeatherMiniCard;
