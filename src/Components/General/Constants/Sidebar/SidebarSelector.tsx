import React, { Children, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import ThemeContext from '../../../../Store/Themes/ThemeContext'
import { BeylIcon } from '../Icons/BeylIcon';
import { Icon } from '../Icons/Icon';
import { SidebarIcon } from './SidebarIcon';

export const SidebarSelector = ({children, backgroundColor} : any) => {

    //get current theme
    const theme = useContext(ThemeContext);

    //get current location of the window
    const location = useLocation();

    const style = {
        base: {
            height: "100%", 
            width: "330px", 
            backgroundColor: backgroundColor ? backgroundColor :  theme.colors.primary,
            position: "fixed",
            borderRight: `1px solid ${backgroundColor ? backgroundColor : theme.colors.secondary}`,
            overflowY: "auto"

        } as React.CSSProperties,

        container : {

            padding: 5,
            display: "flex",
            flexDirection: "column",
            height: "100%",



        } as React.CSSProperties

    }
    

    return (
        <div style={style.base }>

            <div style={style.container} className="p-3">

                <div>
                    {
                        children
                    }
                </div>

            </div>

        </div>
    )
}

