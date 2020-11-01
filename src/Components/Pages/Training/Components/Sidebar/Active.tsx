import React from 'react'
import Themes from '../../../../General/Styles/Themes'

export const Active = () => {

    const styles = {

        container : {
            width: "100%",
            borderRadius: "20px",
            marginTop: "12px",
            display: "flex",
            justifyContent: "center"
        } as React.CSSProperties,
        inside : {
            width: "90%",
            backgroundColor: Themes.beylColor,
            height: "4px",
            borderRadius: "20px",
        } as React.CSSProperties
    } 


    return (
    <div style={styles.container}>
        <div style={styles.inside}></div>
    </div>
    )

}
