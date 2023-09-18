import { Provider } from "react-redux";
import Layout from "./Layout";
import { store } from "./state/store";
import { useState } from "react";
import { WeatherDataContext } from "./state/context/weatherDataContext";

function App() {
  const [testState, setTestState] = useState<string>("test")

  return (
    <Provider store={store}>
      <WeatherDataContext.Provider value={{ value: testState, setValue: setTestState }}>
        <Layout />
      </WeatherDataContext.Provider>
    </Provider>
  );
}

export default App;
