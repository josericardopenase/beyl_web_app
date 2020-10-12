import React, { useState } from 'react'
import Themes from '../../Components/General/Styles/Themes'
import ThemeContext from './ThemeContext'

interface Props{
    children : any;
};

const ThemeProvider = ({children} : Props) => {

    //state that mantain actual theme
    const [theme, setTheme] = useState(Themes.darkTheme);

    //Toggle the actual theme to the oposite one
    const toggleTheme = () => {

        console.log("change")
        if(theme == Themes.darkTheme){
            setTheme(Themes.lightTheme);
        }else{
            setTheme(Themes.darkTheme);
        }

    }

    //return the theme context provider
    return (
        <ThemeContext.Provider value={{colors: theme, toggle : toggleTheme}}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;