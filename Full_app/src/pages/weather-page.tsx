import { useContext, useEffect, useState } from "react";
import { IWeatherBox } from "../helpers/Types";
import CurrentTime from "../components/current-time";
import WeatherBox from "../components/weather-box";
import WeatherConditions from "../components/weather-conditions";
import SearchInput from "../components/search-input";
import { Box, Button, Container, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { WeatherDataContext } from "../state/context/weatherDataContext";
import { useDispatch } from "react-redux";
import { setCurrentWeather } from "../state/reducers/currentWeatherReducer";

const WeatherPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();

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

  useEffect(() => {
    setCurrentWeather(weather)
  }, [weather]);

  const {setValue} = useContext(WeatherDataContext)

  const getWeatherValue = (query: string): void => {
    fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCurrentWeather(data))
        setValue(data.name);
        setWeather(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      className={`app ${
        weather?.main?.temp && weather?.main?.temp > 18 && "warm"
      }`}
      sx={{
        width: isSmallScreen ? "100%" : "100vw",
        height: isSmallScreen ? "100%" : "100vh",
      }}
    >
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            position: isSmallScreen ? "sticky" : "absolute",
            top: 5,
            left: 5,
            zIndex: 1,
          }}
        >
          <Home />
        </Button>
      </Link>
      <Container
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          pt: isSmallScreen ? "5rem" : 0,
        }}
      >
        <Box>
          <CurrentTime />
          <SearchInput getWeatherValue={getWeatherValue} />
        </Box>

        <Box sx={{ pt: isSmallScreen ? "3rem" : 0 }}>
          <WeatherBox weather={weather} />
        </Box>

        <Box sx={{ textAlign: "left" }}>
          <WeatherConditions weather={weather} />
        </Box>
      </Container>
    </Box>
  );
};

export default WeatherPage;
