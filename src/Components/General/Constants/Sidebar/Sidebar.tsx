import React, { Children, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import ThemeContext from '../../../../Store/Themes/ThemeContext'
import { BeylIcon } from '../Icons/BeylIcon';
import { Icon } from '../Icons/Icon';
import { SidebarIcon } from './SidebarIcon';

export const Sidebar = ({construction} : any) => {

    //get current theme
    const theme = useContext(ThemeContext);

    //get current location of the window
    const location = useLocation();

    const style = {
        base: {
            height: "100vh", 
            width: "70px", 
            backgroundColor: theme.colors.secondary,
            textAlign : "center",
            position: "fixed",

        } as React.CSSProperties,

        container : {

            padding: 5,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-between"



        } as React.CSSProperties

    }
    

    return (
        <div style={style.base }>

            <div style={style.container}>

                <BeylIcon size="90%"></BeylIcon>



                <div>
                {
                    construction.map((obj: any) : any => <SidebarIcon key={obj.url} obj={obj} activate={location.pathname === obj.url}></SidebarIcon>)
                }
                </div>

                <span></span>
            </div>

        </div>
    )
}

