import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWeatherBox } from "../../helpers/Types";

const initialState: IWeatherBox = {
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
};

export const currentWeatherReducer = createSlice({
  name: "currentWeatherReducer",
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<IWeatherBox>) => {
      const {
        payload: { name, sys, main, weather, wind },
      } = action;

      state.name = name ?? state.name;
      state.sys = sys ?? state.sys;
      state.main = main ?? state.main;
      state.weather = weather ?? state.weather;
      state.wind = wind ?? state.wind;
    },
  },
});

export const { setCurrentWeather } = currentWeatherReducer.actions;
export default currentWeatherReducer.reducer;
