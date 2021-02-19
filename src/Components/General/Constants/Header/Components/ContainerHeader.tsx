import React, { useContext } from 'react'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import PropsInterfaces from '../../../Interfaces/PropsInterface'

export const ContainerHeader = ({children} : PropsInterfaces.IOnlyChildren) => {
    
    const themes = useContext(ThemeContext)

    const styles = {
        container : {
        padding: 10,
        borderRadius: 10, 
        margin: 20, 
        backgroundColor: themes.colors.primaryTransparent,
        boxShadow: "0px 0px 28px 17px rgba(0,0,0,0.10)",
        backdropFilter: "saturate(180%) blur(20px)",
        position: "relative"
        } as React.CSSProperties,



    };

    return (
        <div style={styles.container} className="d-flex align-items-center">
 
                {
                    children
                }

        </div>
    )
}
