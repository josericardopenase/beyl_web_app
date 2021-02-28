import React, {useEffect, useState} from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';
import useThemes from '../../../../CustomHooks/useThemes'

export default function ThemeSwitchToggle() {


    const theme = useThemes();
    const [active, setActive] = useState(theme.currentTheme()); 

    const toggleTheme = () => {


        theme.toggle()
        
        setActive(theme.currentTheme);

    }


    const styles = {

        background : {

            height: 40,
            width: 75,
            backgroundColor:active === "light" ? '#272B2F' : "#f5f5f5",
            display: "flex",
            alignItems: "center"
            
        } as React.CSSProperties,
        circle : {

            height: 30,
            width: 30,
            backgroundColor: active === "light" ? 'white' : "#1E2025",
            transform: `translate(${active === "light" ? 38 : 4}px)`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition : "0.4s all ease"

            
        } as React.CSSProperties,

    }

    return (
        <div style={styles.background} className="rounded-pill" onClick={() => toggleTheme()}>
            <div style={styles.circle}>

                {
                    active === "light" ?
                        <HiSun size={25} color="#1E2025"></HiSun>
                    :
                        <FaMoon size={20} color="white"></FaMoon>

                }

            </div>
        </div>
    )
}
