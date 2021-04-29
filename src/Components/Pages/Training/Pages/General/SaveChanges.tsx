import { motion } from 'framer-motion'
import hexToRgba from 'hex-to-rgba'
import React, { useState } from 'react'
import { FaSave } from 'react-icons/fa'
import { useStore } from 'react-redux'
import { SpinnerCircular } from 'spinners-react'
import apiTraining from '../../../../../Api/apiTraining'
import useApi from '../../../../../CustomHooks/useApi'
import useNotification from '../../../../../CustomHooks/useNotification'
import useThemes from '../../../../../CustomHooks/useThemes'
import ButtonMain from '../../../../General/Constants/Button/ButtonMain'
import Loading from '../../../../General/Constants/Loading/Loading'
import { Bolder } from '../../../../General/Constants/Text/Bolder'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import Themes from '../../../../General/Styles/Themes'
import ReactConfetti from 'react-confetti'
import useWindowSize from '../../../../../CustomHooks/useWindowSize'


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
    const {width, height} = useWindowSize()
    const [confeti, setConfeti] = useState<boolean>(false);

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
            setConfeti(true)
        }, 1000)

    }


    const styles = {

        container : {

            position : "fixed",
            right : 0,
            width: "auto",
            bottom: 0,

        } as React.CSSProperties,

        innerContainer : {

            backgroundColor: hexToRgba(Themes.beylColor, 0.3),
            color: Themes.beylColor,
            padding: "10px 20px",
            marginBottom: 50,
            marginRight: 30,
            maxWidth: "800px",
            fontSize: 20,
            borderRadius: "50rem",
            cursor: "pointer"
            

        } as React.CSSProperties

    }

    return (
        <div style={styles.container} className="d-flex justify-content-center" >
            <motion.div
            initial={{y: 200}}
            animate={{y : 0}}
            exit={{y: 200}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition = {{duration: 0.1}}
            style={styles.innerContainer} 
            className="d-flex align-items-center justify-content-between "
            onClick={() => saveRutines()}
            >

                {
                    confeti ?
                    <ReactConfetti recycle={false} style={{position: "fixed"}} width={width} height={height} run={true} onConfettiComplete={(confetti : any) => {setConfeti(false); confetti.reset()}}></ReactConfetti>
                    :
                    null

                }

                <FaSave style={{marginRight: 15}}></FaSave>

                <Bolder>

                    {
                        loading ?
                        <SpinnerCircular thickness={160} size={20} color={Themes.beylColor} ></SpinnerCircular>
                        :
                        buttonText ? buttonText : "Guardar cambios realizados"
                    }
                </Bolder>
            </motion.div>
        </div>
    )
}
