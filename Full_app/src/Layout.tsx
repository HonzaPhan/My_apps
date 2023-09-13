import { StrictMode } from "react";
import PokemonsPage from "./pages/pokemons-page";
import WeatherPage from "./pages/weather-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/weather",
    element: <WeatherPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/pokemons",
    element: <PokemonsPage/>,
    errorElement: <ErrorPage />
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
