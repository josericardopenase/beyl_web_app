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
            zIndex: 1000

        } as React.CSSProperties,


    }


    return (
        <div style={styles.container}>
            
            <ContainerHeader>

                <NotificationCenter/>
                
                <ProfileInfo/>
            
            
            </ContainerHeader>


        </div>
    )
}

