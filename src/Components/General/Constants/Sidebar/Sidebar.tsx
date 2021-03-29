import { motion } from 'framer-motion';
import React, { Children, useContext } from 'react'
import { FaCog } from 'react-icons/fa';
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
            height: "100%", 
            width: "65px", 
            backgroundColor: theme.colors.secondary,
            textAlign : "center",
            position: "fixed",

        } as React.CSSProperties,

        container : {

            padding: 5,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"



        } as React.CSSProperties

    }
    

    return (
        <motion.div
        
            initial= {{x : -160, opacity: 0}}
                animate={{x : 0, opacity: 1}} 
                transition = {{duration: 0.4}}
                exit={{x: -200, opacity: 0}}
                
                key={3}
        style={style.base }>

            <div style={style.container}>

                <BeylIcon size="90%"></BeylIcon>



                <div>
                {
                    construction.map((obj: any) : any => <SidebarIcon key={obj.url} obj={obj} activate={location.pathname.includes(obj.url)}></SidebarIcon>)
                }
                </div>

                <SidebarIcon margin="10px 0px" key={'/config'} obj={{ 
                    url: '/config',
                    icon: <FaCog/>,
                    name: 'config'
                }} activate={location.pathname.includes('/config')}></SidebarIcon>
            </div>

        </motion.div>
    )
}

