import React, { useContext, useState } from 'react'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import { FaCamera, FaFilePdf, FaPaperclip, FaVideo} from 'react-icons/fa'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import { Formik } from 'formik'
import FormikFileUpload from '../../../../General/Constants/Text/Inputs/FormikFileUpload'
import FormikInput from '../../../../General/Constants/Text/Inputs/FormikInput'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import hexToRgba from 'hex-to-rgba';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion'
import useVisible from '../../../../../CustomHooks/useVisible'
import useNotification from '../../../../../CustomHooks/useNotification'
import { Title2 } from '../../../../General/Constants/Text/Title2'
import Themes from '../../../../General/Styles/Themes'
import { Bolder } from '../../../../General/Constants/Text/Bolder'
import Placeholder from '../../../../General/Constants/SVGS/Placeholder'
import { Title4 } from '../../../../General/Constants/Text/Title4'

interface IFiles {
    name : string, 
    icon : any,
    color: string
}
const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

function DropdownMenuFiles({open} : any){

    const notificationCenter = useNotification();

    const files : IFiles[] = [
        {
            name : "video",
            icon : <FaVideo></FaVideo>,
            color: "#ef3a3a"
        },
        {
            name : "fotos",
            icon : <FaCamera></FaCamera>,
            color:  "#24e45b"
        },
        {
            name : "pdf",
            icon : <FaFilePdf></FaFilePdf>,
            color:  "#0090ff"
        }

    ]

    const styles = {
        container : {
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom : "53px",
            left: 0
        } as React.CSSProperties,
        item : {
            borderRadius: "50%",
            padding: "11px 16px",
            marginBottom: 15,
            fontSize: 20,

        } as React.CSSProperties
    }

    return (

            <div style={styles.container} onClick={() => {

                notificationCenter.addPopUp({
                    title : <Title2 style={{textAlign: "center", marginTop: 20}}><Bolder><span style={{color: Themes.beylColor}}>Lo sentimos</span></Bolder></Title2>,
                    image : <Placeholder></Placeholder>,
                    body: <div style={{textAlign: "center"}}>
                            <Title4 style={{marginTop: 20}}>Estas funciones aún no estan disponibles, serán añadidas en la proxima actualización</Title4>
                        </div>
                })
            }}>
                {
                files.map((x, index) => (

                    <OverlayTrigger placement="right"
                    overlay={<Tooltip id="button-tooltip-2">{x.name}</Tooltip>} 
                    >
                        {
                            ({ref, ...triggerHandler}) => (

                            <motion.ul variants={variants} 
                               key={index + "selector"}
                                initial={{opacity: 0, y: 200, scale: 0.1}}
                                animate = {{opacity : 1, y: 0, scale : 1}}
                                exit ={{opacity: 0, scale: 0.1}}
                                transition ={{delay: 0.1 * index}}

                            {...triggerHandler} ref={ref} style={{...styles.item, backgroundColor: hexToRgba(x.color, 0.10), color: x.color}}>
                                {
                                    x.icon
                                }
                            </motion.ul>
                            )

                        }
                    </OverlayTrigger>
                    )
                )    
                }
            </div>

    )


}

export default function ChatClip({ sendMessage } : any) {

    const theme = useContext(ThemeContext)
    const {isVisible, setIsVisible, ref, closeRef} = useVisible(false);
    
    const styles : React.CSSProperties = {
        padding: "0.5rem",
        width: "fit-content",
        borderRadius: "50%",
        cursor: "pointer",
        position: "relative"

    }

    return (

            <div style={{width: "100%", display: "flex", justifyContent: "center"}} ref={closeRef}>
                <div style={styles} onClick={() => setIsVisible(!isVisible)} ref={ref}>

                    <AnimatePresence>
                        {isVisible ?
                        
                            <DropdownMenuFiles></DropdownMenuFiles>
                            :
                            null
                        }
                    </AnimatePresence>
                    <Icon>
                            <FaPaperclip/>
                    </Icon> 
                </div>
            </div>




    )
}

/*             <VerticallyCenteredModal title={"Enviar archivo"}
            show={show}
            onHide={() => setShow(false)}
            footer={<></>}
            size="lg"

            >

                <Formik onSubmit={(data) => {sendMessage(data.text, data.file); setShow(false)}} initialValues={{file : "", text: ""}}>
                    {
                        ({handleSubmit}) =>
                            <>
                                <FormikFileUpload name="file" AvalibleFormat={['pdf', 'jpg', 'png']}></FormikFileUpload>
                                <FormikInput name="text" style={{backgroundColor: theme.colors.secondary, width: "100%", padding: "10px 20px"}} placeholder="Añade un mensaje..."></FormikInput>
                                <div className="d-flex justify-content-end w-100 mt-3">
                                    <Bottom1 onClick={handleSubmit}>Enviar</Bottom1>
                                </div>
                            </>
                    }
                </Formik>


            </VerticallyCenteredModal> */