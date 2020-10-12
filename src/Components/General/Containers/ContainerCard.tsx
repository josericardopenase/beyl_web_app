import React, { useContext } from 'react'
import ThemeContext from '../../../Store/Themes/ThemeContext'

export const ContainerCard = ({children} : any) => {

    const theme = useContext(ThemeContext);

    const style : React.CSSProperties = {
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: theme.colors.secondary

    }

    return (
        <div style={style}>

            {
                children
            }
            
        </div>
    )
}
