import { createContext } from "react";
import { LightTheme } from "../../Theme/Theme";

export interface ThemeMode {
    palette: {
        mode: string
    }
}

export const ThemeContext = createContext<{
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void
}>({ theme: LightTheme, setTheme: () => {} });
