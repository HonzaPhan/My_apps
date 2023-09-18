import { createContext } from "react";

export const WeatherDataContext = createContext<{
    value: string;
    setValue: (value: string) => void;
}>({ value: "", setValue: () => {}})