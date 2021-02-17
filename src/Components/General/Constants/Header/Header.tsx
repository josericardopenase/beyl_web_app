import { motion } from 'framer-motion'
import React from 'react'
import ContainerBox from '../../Containers/ContainerBox'
import { ContainerHeader } from './Components/ContainerHeader'
import { NotificationCenter } from './Components/Notifications/NotificationCenter'
import { ProfileInfo } from './Components/ProfileInfo'

export const Header = () => {

    const styles = {
        container: {
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 1000,

        } as React.CSSProperties,


    }


    return (

        
            <motion.div
            
            initial= {{y: -160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4, delay: 0.4}}
                    exit={{y: -160, opacity: 0}}
                    
                    key={3}
            
            style={styles.container}>
            

                <ContainerHeader>

                    <NotificationCenter badge={true}/>
                    
                    <ProfileInfo/>
                
                </ContainerHeader>

            </motion.div>



    )
}

