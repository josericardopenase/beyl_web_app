import { motion } from 'framer-motion'
import React from 'react'
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa'
import useThemes from '../../../CustomHooks/useThemes'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Title4 } from '../../General/Constants/Text/Title4'


type notificationType =
    "danger" |
    "information" |
    "error" |
    "success"


interface IProps{

    type : notificationType ,
    message : string,
    id : number

}

export default function NotificationComponent({type, message, id} : IProps) {

    const theme = useThemes()

    const iconMap : any = {
        danger : <FaExclamationTriangle color="#FFFF00"></FaExclamationTriangle>,
        information : <FaInfoCircle color="#197BBD"></FaInfoCircle>,
        error : <FaExclamationCircle color="#FF7070"></FaExclamationCircle> ,
        success : <FaCheckCircle color="#22A447"/>

    }


    const style = {
        container : {

            width: "100%",
            position: "fixed",
            display: "flex",
            top: 0,
            justifyContent: "center",
            zIndex: 10000


        } as React.CSSProperties,
        notification : {
            padding: "0.6rem 6rem",
            marginTop: "15px",
            borderRadius: "40px",
            maxWidth: "700px",
            width: "fit-content",
            backgroundColor: theme.colors.secondary

        } as React.CSSProperties

    }

    return (
        <motion.div 
        
            key={id} 
            initial= {{y: -200}}
                    animate={{y: 0}} 
                    transition = {{duration: 0.4}}
                    exit={{y: -200}}

        style={style.container}>

            <div className="shadow d-flex align-items-center justify-content-center" style={style.notification}>
                <div style={{fontSize: 20, marginBottom : 5}} >
                    {
                        iconMap[type]
                    }
                </div>

                <Title4 style={{marginLeft: 20}}>
                    {
                        message 
                    }
                </Title4>
            </div>
        </motion.div>
    )
}
