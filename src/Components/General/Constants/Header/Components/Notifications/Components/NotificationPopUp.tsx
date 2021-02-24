import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import { FaDumbbell, FaExclamation, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import ThemeContext from '../../../../../../../Store/Themes/ThemeContext'
import Themes from '../../../../../Styles/Themes';
import { Title3 } from '../../../../Text/Title3';
import { NotificationPopUpSingle } from './NotoficationPopUpComponents/NotificationPopUpSingle';

export const NotificationPopUp = ({Ref} : any) => {

    const theme = useContext(ThemeContext);

    const styles = {

        position : {
            position: "absolute", 
            top: 45,
            right: 0,
            zIndex: 200
        } as React.CSSProperties,

        container : {
            backgroundColor: theme.colors.secondary,
            minWidth: "300px",
            boxShadow: "0px 0px 28px 17px rgba(0,0,0,0.10)",
            borderRadius: "10px",
            padding: 13
        } as React.CSSProperties,
    }

    return (

        /* Container para realizar posicionamiento */

        <motion.div 
            key={10000} 
            ref={Ref} 
            style={styles.position}
            initial= {{y: -40, opacity: 0}}
            animate={{y: 0, opacity: 1}} 
            transition = {{duration: 0.2}}
            exit={{y: -40, opacity:0}}
        >

            <div style={styles.container}>


                <NotificationPopUpSingle notification="Tienes un deportista sin atender" icon={<FaInfoCircle/>} color="197BBD" seen={true}></NotificationPopUpSingle>
                <NotificationPopUpSingle notification="Trabaja un poco no bago?" icon={<FaExclamationCircle/>} color="FF7070"></NotificationPopUpSingle>
                <NotificationPopUpSingle notification="Oye bro no estas un poco gordo?" icon={<FaDumbbell/>} color={Themes.beylColor}></NotificationPopUpSingle>
                <NotificationPopUpSingle notification="Porque no te suicidas?" icon={<FaExclamationTriangle/>} color="yellow"></NotificationPopUpSingle>


            </div>
        </motion.div>
    )
}
