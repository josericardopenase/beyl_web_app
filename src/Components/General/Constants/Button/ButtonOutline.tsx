import { motion } from 'framer-motion'
import React from 'react'
import { Button } from 'react-bootstrap'
import Themes from '../../Styles/Themes'

export default function ButtonOutline(props : any) {

    const styles= 
    {
        color: Themes.beylColor, 
        borderRadius: 30, 
        ...props.style, 
        fontFamily : "Poppins", 
        fontWeight : 600, 
        border: `2px ${Themes.beylColor} solid`, 
        padding: "12px 16px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center"
    } as React.CSSProperties


    return  (
        <motion.div
        
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        {...props} style={{...styles, ...props.style}} >
            { props.icon ? 
            <div className="mr-3">
                {props.icon}
            </div>
            :
            null }
            { props.children }
        </motion.div> 
    )
    
}
