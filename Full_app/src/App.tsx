import { Provider } from "react-redux";
import Layout from "./Layout";
import { store } from "./state/store";
import { useState } from "react";
import { Button, ThemeProvider, CssBaseline } from "@mui/material";
import { DarkTheme, LightTheme } from "./Theme/Theme";

function App() {
  const [themeState, setThemeState] = useState(LightTheme);

  const toggleTheme = () => {
    setThemeState(themeState === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeState}>
        <CssBaseline />
        <Layout />
        <Button
          onClick={toggleTheme}
          sx={{ position: "absolute", bottom: 15, left: 15 }}
          variant="contained"
        >
          THEME
        </Button>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
