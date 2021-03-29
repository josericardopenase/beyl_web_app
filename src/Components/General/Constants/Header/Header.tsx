import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { CloseButton } from 'react-bootstrap'
import { FaCog, FaSignOutAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useThemes from '../../../../CustomHooks/useThemes'
import useVisible from '../../../../CustomHooks/useVisible'
import { logOut, removeLocalToken } from '../../../../Store/authentication'
import ContainerBox from '../../Containers/ContainerBox'
import Themes from '../../Styles/Themes'
import CloseSession from '../Button/CloseSession'
import { Icon } from '../Icons/Icon'
import { Title3 } from '../Text/Title3'
import { Title4 } from '../Text/Title4'
import { ContainerHeader } from './Components/ContainerHeader'
import { NotificationCenter } from './Components/Notifications/NotificationCenter'
import { ProfileInfo } from './Components/ProfileInfo'

export const Header = () => {

    const theme = useThemes()
    const {ref, isVisible, setIsVisible, closeRef} = useVisible(false);

    const styles = {
        container: {
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 100000,

        } as React.CSSProperties,
        dropdown: {

            backgroundColor:  theme.colors.secondary,
            position: "absolute",
            right: 0,
            top: 0,
            marginTop: 60,
            padding: 15,
            borderRadius: 10,
            zIndex: 0


        } as React.CSSProperties


    }

    const dispatch = useDispatch()

    return (

            <motion.div
            
            initial= {{y: -160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4, delay: 0.4}}
                    exit={{y: -160, opacity: 0}}
                    
                    key={3}
            
            style={styles.container}>
            

                <ContainerHeader>
                

{/*                     <NotificationCenter badge={true}/> */}
                    
                    <div ref={closeRef} onClick={() => setIsVisible(!isVisible)}>
                        <ProfileInfo/>
                    </div>


                <AnimatePresence exitBeforeEnter>
                    {

                    isVisible ? 

                    <motion.div 

                    ref={ref}
                    initial= {{y: -30, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.1}}
                    exit={{y: -30, opacity: 0}}
                    key={100}
                    
                    style={styles.dropdown}>

                        <Link onClick={() => setIsVisible(false)} className="d-flex align-items-center" style={{cursor: "pointer"}} to="/config">

                            <Icon>
                                <FaCog></FaCog>
                            </Icon>

                            <Title4 style={{marginLeft: 10}}>Configuracion</Title4> 
                        </Link  >

                        <div>
                            <CloseSession></CloseSession>
                        </div>


                    </motion.div>
                    : 
                    null
                    }
                
                </AnimatePresence>
                </ContainerHeader>


            </motion.div>
            


    )
}

