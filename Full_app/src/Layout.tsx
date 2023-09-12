import { StrictMode } from "react";
import PokemonsPage from "./pages/pokemons-page";
import WeatherPage from "./pages/weather-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/weather",
    element: <WeatherPage/>,
  },
  {
    path: "/pokemons",
    element: <PokemonsPage/>,
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
