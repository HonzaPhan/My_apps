import { configureStore } from "@reduxjs/toolkit";
import currentPokemonReducer from "./reducers/currentPokemonReducer";
import currentWeatherReducer from "./reducers/currentWeatherReducer";
import currentFormReducer from "./reducers/currentFormReducer";

export const store = configureStore({
    reducer: {
        currentPokemonReducer: currentPokemonReducer,
        currentWeatherReducer: currentWeatherReducer,
        currentFormReducer: currentFormReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch