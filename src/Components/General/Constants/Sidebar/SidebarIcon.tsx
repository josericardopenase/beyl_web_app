import React, { Children, useContext, useState } from 'react'
import ThemeContext from '../../../../Store/Themes/ThemeContext'
import Themes from '../../Styles/Themes'
import { Icon } from '../Icons/Icon'
import {
    Link, useHistory
  } from "react-router-dom";

export const SidebarIcon = ({obj, activate, margin} : any) => {

    const themes = useContext(ThemeContext);
    const beylColor = Themes.beylColor;
    const history = useHistory()

    const [inactiveBorderRadius, setInactiveBorderRadius] = useState('50%')

    const style : React.CSSProperties = {
        margin: margin? margin : "40px 0px",
        width: "100%",
        padding: "1.05rem 0rem",
        backgroundColor: activate ? beylColor : themes.colors.primary,
        borderRadius: activate ? "20px" : inactiveBorderRadius,
        display: "flex",
        justifyContent: "center",
        flex: 1,
        transition: "all 0.2s ease",
        cursor: "pointer"
        
    } 


    return (
        <div onClick={() => activate ? null : history.push(obj.url)}>
            <div style={style} className="sidebar-icon" onMouseEnter={() => setInactiveBorderRadius('20px')} onMouseLeave={()=> setInactiveBorderRadius('50%')}>
                <Icon size = "23px" color= {activate ? 'white' : undefined}>

                    {
                        obj.icon
                    }

                </Icon>
            </div>
        </div>
    )
}
