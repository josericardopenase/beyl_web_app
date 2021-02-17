import { motion } from 'framer-motion'
import React from 'react'
import useThemes from '../../../../../CustomHooks/useThemes'
import ButtonMain from '../../../../General/Constants/Button/ButtonMain'
import { Title4 } from '../../../../General/Constants/Text/Title4'


interface IProps{

    save : () => any,
    text: string,
    buttonText ?: string

}

export default function SaveChanges({}) {


    const themes = useThemes()

    const styles = {

        container : {

            position : "fixed",
            left: "50%",
            bottom: 0,
            margin: 10 ,

        } as React.CSSProperties,

        innerContainer : {

            width: "100%",
            backgroundColor: themes.colors.secondary,
            padding: "10px 10px",
            maxWidth: "800px",
            borderRadius: 20
            

        } as React.CSSProperties


    }

    return (
        <div style={styles.container} className="d-flex justify-content-center" >
        

            <motion.div
            initial={{y: 200}}
            animate={{y : 0}}
            exit={{y: 200}}
            
            transition = {{duration: 0.4}}
            style={styles.innerContainer} className="d-flex align-items-center justify-content-between ">
                <Title4 style={{marginRight: 100, marginLeft: 10}}>Guarda los cambios echos</Title4>
                <ButtonMain>Guardar</ButtonMain>
            </motion.div>
        </div>
    )
}
