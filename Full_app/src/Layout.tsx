import { StrictMode, useState } from "react";
import PokemonsPage from "./pages/pokemons-page";
import WeatherPage from "./pages/weather-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import PokemonPage from "./pages/pokemon-page";
import WeatherMiniCard from "./components/weather-mini-card";
import { IWeatherBox } from "./helpers/Types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/weather",
    element: <WeatherPage/>,
  },
  {
    path: "/pokemons",
    element: <PokemonsPage/>,
  },
  {
    path: "/pokemons/:id",
    element: <PokemonPage />,
  },

]);

const Layout = () => {
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
  
  return (
    <StrictMode>
      <WeatherMiniCard weather={weather} />
      <RouterProvider router={router} />
    </StrictMode>
  );
};

export default Layout;
