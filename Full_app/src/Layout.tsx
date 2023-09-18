import { StrictMode } from "react";
import PokemonsPage from "./pages/pokemons-page";
import WeatherPage from "./pages/weather-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import PokemonPage from "./pages/pokemon-page";

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
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

export default Layout;
