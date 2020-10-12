import React from "react"
import { ArrowFunction } from "typescript";
import Themes, { ITheme } from "../../Components/General/Styles/Themes";

interface context{
    colors: ITheme,
    toggle(): void,
};

const ThemeContext = React.createContext<context>({colors: Themes.darkTheme, toggle: () => {}});

export default ThemeContext;