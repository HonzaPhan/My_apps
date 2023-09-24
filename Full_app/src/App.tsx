import { Provider } from "react-redux";
import Layout from "./Layout";
import { store } from "./state/store";
import { useState } from "react";
import { WeatherDataContext } from "./state/context/weatherDataContext";
import { Button } from "@mui/material";
import { DarkTheme, LightTheme } from "./Theme/Theme";
import { ThemeContext, ThemeMode } from "./state/context/themeContext";

function App() {
  const [testState, setTestState] = useState<string>("test");
  const [themeState, setThemeState] = useState<ThemeMode>(LightTheme);

  const toggleTheme = () => {
    setThemeState(themeState === LightTheme ? DarkTheme : LightTheme);
  };
  
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme: themeState, setTheme: setThemeState }}>
        <WeatherDataContext.Provider
          value={{ value: testState, setValue: setTestState }}
        >
          <Layout />
        </WeatherDataContext.Provider>
        <Button onClick={toggleTheme} sx={{ position: "absolute", bottom: 15, left: 15 }}>
          THEME
        </Button>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
