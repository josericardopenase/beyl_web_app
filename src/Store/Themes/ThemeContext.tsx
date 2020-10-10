import React from "react"
import { ArrowFunction } from "typescript";
import Themes, { Theme } from "../../Components/General/Styles/Themes";

interface context{
    colors: Theme,
    toggle: any,
}

const ThemeContext = React.createContext<context>({colors: Themes.darkTheme, toggle: () => {}})

export default ThemeContext