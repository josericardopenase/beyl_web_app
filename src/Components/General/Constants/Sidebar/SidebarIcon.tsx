import React, { Children, useContext, useState } from 'react'
import ThemeContext from '../../../../Store/Themes/ThemeContext'
import Themes from '../../Styles/Themes'
import { Icon } from '../Icons/Icon'


export const SidebarIcon = ({obj, activate} : any) => {

    const themes = useContext(ThemeContext);
    const beylColor = Themes.beylColor;

    const [inactiveBorderRadius, setInactiveBorderRadius] = useState('50%')

    const style : React.CSSProperties = {
        margin: "40px 0px",
        width: "100%",
        padding: "1.2rem 0rem",
        backgroundColor: activate ? beylColor : themes.colors.primary,
        borderRadius: activate ? "20px" : inactiveBorderRadius,
        display: "flex",
        justifyContent: "center",
        flex: 1,
        transition: "all 0.2s ease"
    } 


    return (
        <div style={style} className="sidebar-icon" onMouseEnter={() => setInactiveBorderRadius('20px')} onMouseLeave={()=> setInactiveBorderRadius('50%')}>
            <Icon size = "23px" color= {activate ? 'white' : undefined}>

                {
                    obj.icon
                }

            </Icon>
        </div>
        
    )
}
