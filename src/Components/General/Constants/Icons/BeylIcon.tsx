import React, { useContext } from 'react'
import LogoBeyl from '../../../../MediaFiles/logobeyl.png'
import ThemeContext from '../../../../Store/Themes/ThemeContext'

export const BeylIcon = ({size, style} : any) => {

        const theme = useContext(ThemeContext)

        return (
        
            <div style={style}>
                <img src={LogoBeyl} style= {{width: size}} alt = "Logo" onClick={() => {theme.toggle()}}/>
            </div>
        )

}
