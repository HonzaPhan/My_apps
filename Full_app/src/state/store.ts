import { configureStore } from "@reduxjs/toolkit";
import currentPokemonReducer from "./reducers/currentPokemonReducer";

export const store = configureStore({
    reducer: {
        currentPokemonReducer: currentPokemonReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch