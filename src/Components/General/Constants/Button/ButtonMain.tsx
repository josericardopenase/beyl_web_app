import { motion } from 'framer-motion'
import React from 'react'
import { Button } from 'react-bootstrap'
import Themes from '../../Styles/Themes'

export default function ButtonMain(props : any) {

    const styles= 
    {
        color: "white", 
        borderRadius: 12, ...props.style, 
        fontFamily : "Poppins", 
        fontWeight : 600, 
        backgroundColor: Themes.beylColor, 
        padding: 12,
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
