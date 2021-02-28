import React, { useEffect, useState } from 'react'
import Themes from '../../Components/General/Styles/Themes'
import ThemeContext from './ThemeContext'

interface Props{
    children : any;
};

const ThemeProvider = ({children} : Props) => {

    //state that mantain actual theme
    const [theme, setTheme] = useState(Themes.darkTheme);

    useEffect(() => {

        const storeTheme = localStorage.getItem('theme')

        console.log(storeTheme)

        if(!storeTheme){
            setTheme(Themes.darkTheme)
        }

        if(storeTheme === 'dark'){
            setTheme(Themes.darkTheme)
        }else{
            setTheme(Themes.lightTheme)
        }

    }, [])

    //Toggle the actual theme to the oposite one
    const toggleTheme = () => {

        if(theme === Themes.darkTheme){
            localStorage.setItem('theme', 'light')
            setTheme(Themes.lightTheme);
        }else{
            localStorage.setItem('theme', 'dark')
            setTheme(Themes.darkTheme);
        }

    }

    const setDarkMode = () => {
            localStorage.setItem('theme', 'dark')
            setTheme(Themes.darkTheme);
    }

    const setLightMode = () => {
            localStorage.setItem('theme', 'light')
            setTheme(Themes.lightTheme);
    }

    const currentTheme = () => {

        return localStorage.getItem('theme')

    }

    //return the theme context provider
    return (
        <ThemeContext.Provider value={{colors: theme, toggle : toggleTheme, setDarkMode: setDarkMode, setLightMode : setLightMode, currentTheme : currentTheme}}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;