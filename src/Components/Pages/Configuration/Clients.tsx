import hexToRgba from 'hex-to-rgba'
import React, { useEffect, useRef, useState } from 'react'
import { FaCopy, FaSync, FaTrash, FaRedoAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import useNotification from '../../../CustomHooks/useNotification'
import useThemes from '../../../CustomHooks/useThemes'
import { athletesReceived, deleteAthlete, loadAthletes } from '../../../Store/athleltes'
import { logOut, removeLocalToken } from '../../../Store/authentication'
import { getAllCode, getNewCode } from '../../../Store/trainerCode'
import InterrogationTooltip from '../../General/Constants/GeneralPropose/InterrogationTooltip'
import { Icon } from '../../General/Constants/Icons/Icon'
import ProfilePicIcon from '../../General/Constants/Icons/ProfilePicIcon'
import RemoveIcon from '../../General/Constants/Icons/RemoveIcon'
import SvgJoinClient from '../../General/Constants/SVGS/SvgJoinClient'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title2 } from '../../General/Constants/Text/Title2'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Title4 } from '../../General/Constants/Text/Title4'
import { Title5 } from '../../General/Constants/Text/Title5'
import ContainerBox from '../../General/Containers/ContainerBox'
import ContainerMarginTop from '../../General/Containers/ContainerMarginTop'
import Themes from '../../General/Styles/Themes'
import { Athlete } from '../Training/Components/Sidebar/Athlete'
import user from '../../../Api/apiUser'
import { motion } from 'framer-motion'

function TrainerCode(){

    const themes = useThemes()
    const dispatch = useDispatch()
    const [copySuccess, setCopySuccess] = useState<string | null>(null)
    const textAreaRef : any = useRef(null);
    const successColor : string = "#A3DE83";

    const lastCode = useSelector((state : any) => state.trainerCode.list[state.trainerCode.list.length - 1] )

    const style ={
        input : {
            backgroundColor: themes.colors.secondary,
            border : `2px ${!copySuccess ? themes.colors.secondary : Themes.beylColor} solid`,
            borderWidth: copySuccess ? "2px 0px 2px 2px" : "0px !important",
            color: themes.colors.textPrimary,
            padding: 12,
            width: "40%",
            minWidth: 150,
            borderRadius: "7px 0px 0px 7px",

        } as React.CSSProperties,
        boton : {
            backgroundColor:  Themes.beylColor  ,
            border : 0,
            color: themes.colors.textPrimary,
            padding: "10px 15px",
            borderRadius: "0px 7px 7px 0px",
            cursor: "pointer",
        }
    }

    useEffect(() => {
        dispatch(getAllCode());
    }, [])

    function copyToClipboard(e : any) {
        if(textAreaRef.current != null){
            textAreaRef.current.select();
            document.execCommand('copy');
            e.target.focus();
            setCopySuccess('Copied!');
        }

      };

    return (
        <div className="mt-5 ">
            <Title4 color="secondary">Código para que tus clientes se registren</Title4>

            <div>
            <div className="mt-3 d-flex align-items-stretch position-relative">

                <input ref={textAreaRef} value={lastCode ? lastCode.key : "No tienes ningún código..."} style={style.input}></input>

                <div style={{backgroundColor: themes.colors.secondary, alignItems: "center", display: "flex",
                border : `2px ${!copySuccess ? themes.colors.secondary : Themes.beylColor} solid`,
                borderWidth: copySuccess ? "2px 2px 2px 0px" : "0px !important",
            
                    }} onClick={copyToClipboard}>
                    <Title4 color="white" style={{backgroundColor: Themes.beylColor, padding: 7, borderRadius: 5,marginRight: 10, cursor: "pointer"}}>
                        <Bolder>
                        {
                            !copySuccess ?
                            "Copiar"
                            :
                            "Copiado!"
                        }
                        </Bolder>
                    </Title4>
                </div>

                <div style={style.boton} className="d-flex flex-column justify-content-center" onClick={() => {
                    dispatch(getNewCode());
                    setCopySuccess(null);
                    }
                }>
                    <FaRedoAlt style={{color: "white"}}/>
                </div>

                <div className="d-flex align-items-center ml-3">
                    <InterrogationTooltip size="25">
                        <>
                            Los códigos de entrenador son solo de un uso.
                            puedes crear tantos como quieras 🐈. 
                        </>
                    </InterrogationTooltip>
                </div>
            </div>
            </div>
        </div>
    )

}

function Client({obj} : any){

    const themes = useThemes()
    const dispatch = useDispatch()

    const styles ={
        container : {
            backgroundColor: themes.colors.secondary,
            border : 0,
            color: themes.colors.textPrimary,
            padding: 10,
            borderRadius: 18,
            width: "100%",
            marginTop: 10,
            display: "flex",
        }
    }

    return (
        <div style={styles.container} className="justify-content-between align-items-center">
            
            <div className="d-flex align-items-center align-items-center">
                <ProfilePicIcon size={60} url={obj.user.profile_pic}></ProfilePicIcon>

                <div className="ml-4">
                    <Title3 >{obj.user.first_name + " " + obj.user.last_name}</Title3>
                    <Title5 color="secondary">{obj.user.email}</Title5>
                </div>

            </div>


            <div className="mr-2">
                <RemoveIcon size={22} popUp={true}  onClick={() => dispatch(deleteAthlete(obj.id))}/>
            </div>

        </div>
    )

}

export default function Clients() {


    const dispatch = useDispatch()

    const athletes = useSelector((state : any) => state.athletes.list)
    const user_count = useSelector((state : any) => state.auth.user)
    const notificationCenter = useNotification();
    const lastCode = useSelector((state : any) => state.trainerCode.list[state.trainerCode.list.length - 1] )

    const showPopUp = () => {

        notificationCenter.addPopUp({
            upperTitle : <Title2 style={{textAlign: "center", marginBottom: 100}}><Bolder>Gestiona tus clientes <span style={{color: Themes.beylColor}}>con Beyl</span></Bolder></Title2>,
            image : <SvgJoinClient></SvgJoinClient>,
            size: "xl"
        })

    }

    const showAddAthletePopUp = async () => {


        const code = await user.getNewTrainerCode()
        console.log(code)
        if(code.ok){
            notificationCenter.addPopUp({
                upperTitle : <Title2 style={{textAlign: "center", marginBottom: 100}}><Bolder>Agrega un nuevo <span style={{color: Themes.beylColor}}>cliente</span></Bolder></Title2>,
                body : 
                        <div>
                            <Title3>
                                Ojo! Enviale este código a tu cliente para registrarse en la aplicación
                                móvil.
                            </Title3>

                            <Title1 style={{marginTop: 30}} color={Themes.beylColor}>
                                <Bolder>
                                    {
                                        lastCode ?
                                        code.data.code
                                        :
                                        null

                                    }
                                </Bolder>
                            </Title1>

                            <Title3 style={{marginTop: 40}}>
                                    O bien, enviale el código junto a instrucciones de uso a su email
                            </Title3>
                        </div>
                    ,
                size: "lg"
            })
        }

    }


    useEffect(() => {
        dispatch(loadAthletes)
        dispatch(getAllCode());

        const firstTimeClients = localStorage.getItem('firstTimeClients') || 'true';

        if(firstTimeClients === "true"){
            showPopUp();
            localStorage.setItem('firstTimeClients', 'false');
        }

    }, [])

    if(!user_count){
        return <div></div>
    }


    return (
        <ContainerMarginTop>
            <div className="p-4 pt-5">

                <div className="d-flex align-items-center">
                <Title1><Bolder>Gestiona tus clientes</Bolder></Title1>   

                    <div className="ml-3" onClick={() => {
                            showPopUp()
                        }}>
                        <InterrogationTooltip size="35" show>
                        </InterrogationTooltip>
                    </div>
                </div>
                <div className="d-flex align-items-end justify-content-between">
                    <div>
                        <motion.div style={{
                            padding: "10px 30px",
                            color: "white",
                            fontSize: 18,
                            backgroundColor: Themes.beylColor,
                            borderRadius: "50rem",
                            cursor: "pointer",
                            boxShadow: `-4px -3px 45px 21px ${hexToRgba(Themes.beylColor, 0.05)}`
                        }}

                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        
                        onClick={showAddAthletePopUp}
                        >
                            <Bolder>
                            Nuevo cliente
                            </Bolder>
                        </motion.div>
                    </div>

                    <div className="d-flex flex-column align-items-center pr-5 pl-5">
                        <div className="d-flex align-items-end mt-3">
                            <Title1 color="secondary">{athletes.length}/</Title1>
                            <Title1 color={Themes.beylColor}>{user_count.plan.user_count}</Title1>
                        </div>
                        <Title3 color="secondary" style={{marginTop: 10, marginBottom: 10}}>Clientes actuales</Title3>
                    </div>

                </div>

                <div className="mt-4">
                    <Title3><Bolder>Tus clientes:</Bolder></Title3>

                    {
                        athletes.length > 0 ?

                            <>
                            {
                                athletes.map((x : any) => <Client obj={x}></Client>)

                            }
                            </>

                        :

                        <div style={{marginTop: 110}}>
                            <SvgJoinClient></SvgJoinClient>
                        </div>
                    }
                </div>

                

            </div>
        </ContainerMarginTop>
    )
}
