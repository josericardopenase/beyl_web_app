import React, { useContext } from "react";
import ThemeContext from "../Store/Themes/ThemeContext";

export default function useThemes(){
    return useContext(ThemeContext);
}