import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useStore } from 'react-redux'
import { SpinnerCircular } from 'spinners-react'
import apiTraining from '../../../../../Api/apiTraining'
import useApi from '../../../../../CustomHooks/useApi'
import useNotification from '../../../../../CustomHooks/useNotification'
import useThemes from '../../../../../CustomHooks/useThemes'
import ButtonMain from '../../../../General/Constants/Button/ButtonMain'
import Loading from '../../../../General/Constants/Loading/Loading'
import { Title4 } from '../../../../General/Constants/Text/Title4'


interface IProps{

    apiSave : (id: number) => any,
    text: string,
    buttonText ?: string,
    notificationText : string

}

export default function SaveChanges({apiSave, text, buttonText, notificationText} : IProps) {


    const themes = useThemes()

    const [loading, setLoading] = useState(false)
    const notifications = useNotification()
    const saveRutine = useApi(apiSave)
    const athlete = useStore().getState().athletes.selectedAthlete
    

    const saveRutines = () => {

        if(loading)
            return
       
        setLoading(true)

        saveRutine.request( athlete.id  )

        setTimeout(() => {
            setLoading(false)
            notifications.pushNotification({
                type: "success",
                message: notificationText
            })
        }, 1000)

    }


    const styles = {

        container : {

            position : "fixed",
            right : 0.5,
            left: 0.5,
            width: "auto",
            bottom: 0,
            marginLeft: 400,
            marginBottom: 10

        } as React.CSSProperties,

        innerContainer : {

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
                <Title4 style={{marginRight: 100, marginLeft: 10}}>{text}</Title4>
                <ButtonMain style={{width: 100}} onClick={saveRutines}>

                    {
                        loading ?
                        <SpinnerCircular thickness={160} size={20} color="#2491ff" ></SpinnerCircular>
                        :
                        buttonText ? buttonText : "Guardar cambios realizados"
                    }

                </ButtonMain>
            </motion.div>
        </div>
    )
}
