import React from "react"
import { ArrowFunction } from "typescript";
import Themes, { ITheme } from "../../Components/General/Styles/Themes";

interface context{
    colors: ITheme,
    toggle(): void,
    setDarkMode() : void,
    setLightMode() : void
    currentTheme() : any
};

const ThemeContext = React.createContext<context>({colors: Themes.darkTheme, toggle: () => {}, setDarkMode: () => {}, setLightMode: () => {}, currentTheme : () => {}});

export default ThemeContext;