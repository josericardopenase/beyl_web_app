import React, { useContext } from 'react'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import Themes from '../../../../General/Styles/Themes'

interface props{
    main : boolean,
    message: string
    time: string
}

export default function Message({main, message, time} : props) {
    const theme = useContext(ThemeContext)


    const styles = {

        container : {
            backgroundColor: main ? theme.colors.tertiary : theme.colors.secondary,
            color: theme.colors.textPrimary,
            padding: 10,
            borderRadius: main ? "10px 10px 0px 10px" : "10px 10px 10px 0px",
            width: "fit-content",
            margin: 10,
            maxWidth: "500px",
            display: "flex"
        }  as React.CSSProperties
        ,
        date  : {
            fontSize: "10px",
            color: theme.colors.textSecondary,
            display: "flex",
            justifyContent: main ? "flex-end" : "flex-start",
            alignSelf: "flex-end",
            marginLeft: 10

        } as React.CSSProperties 
        
    };

    return (
        <div style={{ display: "flex", justifyContent: main ?  "flex-end" : "flex-start"}}>
            <div style={styles.container}>
                <div>
                    {message}
                </div>

                <div style={styles.date}>
                    {time}
                </div>
            </div>
        </div>
    )
}
