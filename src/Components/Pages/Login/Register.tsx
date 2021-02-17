import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import useThemes from '../../../CustomHooks/useThemes'
import { BeylIcon } from '../../General/Constants/Icons/BeylIcon'
import { Sidebar } from '../../General/Constants/Sidebar/Sidebar'
import { SidebarSelector } from '../../General/Constants/Sidebar/SidebarSelector'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Title4 } from '../../General/Constants/Text/Title4'
import { Title5 } from '../../General/Constants/Text/Title5'
import { ContainerSidebar } from '../../General/Containers/ContainerSidebar'
import Themes from '../../General/Styles/Themes'
import imagen from '../../../MediaFiles/imagen.png'
import { ContainerSidebarSelector } from '../../General/Containers/ContainerSidebar copy'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Formik, FormikContextType, FormikProps, FormikState, FormikValues } from 'formik'
import Input from '../../General/Constants/Text/Inputs/Input'
import ButtonMain from '../../General/Constants/Button/ButtonMain'
import * as Yup from 'yup'
import TitleError from '../../General/Constants/Text/TitleError'
import ContainerBox from '../../General/Containers/ContainerBox'
import { Title2 } from '../../General/Constants/Text/Title2'
import { FaArrowLeft, FaCheck, FaFire, FaPlus, FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import { authRegister } from '../../../Store/authentication'
import { useDispatch } from 'react-redux'
import  athletes  from '../../../Api/apiAthletes'
import { AnimatePresence, motion } from 'framer-motion'
import SvgRegisterFinish from '../../General/Constants/SVGS/SvgRegisterFinish'
import { Icon } from '../../General/Constants/Icons/Icon'
import { Link } from 'react-router-dom'

function RegisterPoint({numero, titulo, menu, first} : any){

    const theme = useThemes()
    const activo = menu === numero
    
    return (
    
        <div className= {`p-3 mt-2 text-center d-flex align-items-center ${ !activo ? "" : "shadow"}`} style={{backgroundColor: !activo ? "transparent" : theme.colors.primary, borderRadius: 20}}>
            <div className="pr-3 pl-3" style={{borderRadius: "50%"}}>
                <div className="shadow" style={{border: activo ? `2px ${theme.colors.textPrimary} solid`: `2px ${theme.colors.primary} solid`, borderRadius: "50%", width: 27, padding: "2px 0px", backgroundColor: theme.colors.primary }}>
                    <Title4><Bolder>{numero}</Bolder></Title4>
                </div>
            </div>
            <Title4>{titulo}</Title4>
        </div>
    
    )

}

function InputBox(props : any){

    const theme = useThemes()

    return (
            <Input  {...props} style={{backgroundColor: theme.colors.secondary, padding: "15px 10px", width: "100%", marginTop: "15px" }}></Input>
    ) 

}

function TitleErrorRegister({error} : any){


            return error ? <TitleError style={{textAlign : "left", width: "100%"}}>{error}</TitleError> : null

}

function Checklist({children} : any){

    return (
        <div className="d-flex mt-4 align-items-center">

            <div>
                <FaCheck size={20} color="#22A447" ></FaCheck>
            </div>

            <Title4 style={{marginLeft: 15, textAlign: "left"}}>
            {children}
            </Title4>
        </div>
    )
}

function PriceCard({makeSelection} : any){

    const themes = useThemes()

    return (
    
        <Col sm={12} md={5} lg={5} xl={4} className="mt-5" >
            <div style={{backgroundColor: themes.colors.secondary, padding: 20, borderRadius: 15, textAlign: "center"}}>

                <Title2>Beta ✈️</Title2>
                <Title1 style={{marginTop: 10}}><Bolder>GRATIS</Bolder></Title1>
                <Title3 style={{marginTop: 10}} color="secondary">Hasta 20 clientes</Title3>

                <div className="mt-3">

                    <Checklist> Herramienta para creación de dietas y entrenos </Checklist>
                    <Checklist>Herramienta para gestión de clientes</Checklist>
                    <Checklist> Aplicación  móvil para tus clientes</Checklist>
                    <Checklist> Atención al cliente </Checklist>
                    <Checklist> Soporte técnico personalizado </Checklist>

                    <div className="d-flex mt-4 align-items-center">

                            <div>
                                <FaPlus size={20} color="#FFC600" ></FaPlus>
                            </div>

                            <Title4 style={{marginLeft: 15, textAlign: "left"}}>
                            ¡Muchas más cosas por venir!
                            </Title4>
                    </div>


                    <ButtonMain className="mt-5" onClick={makeSelection} >Seleccionar</ButtonMain>
                </div>

            </div>
        </Col>

    )

}


export default function Register() {

    const theme = useThemes()


    const [number, setNumber] = useState(1)
    const [emailErrors, setEmailErrors] = useState<string>()
    const dispatch = useDispatch()

    const validations = [
        Yup.object().shape({
            email: Yup.string().required().email(),
            password : Yup.string().required().min(8).max(20),
            confirmpassword: Yup.string().required().when("password", {
                is: (val : any) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
                )
            })

        }),
        Yup.object().shape({
            name: Yup.string().required(),
            surname : Yup.string().required(),
        }),
    ]


    const menu = ({handleChange, handleBlur, handleSubmit, values, errors } : FormikProps<any>) => [

            <motion.div 
            initial= {{y: 160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{y: -200, opacity: 0}}
                    
                    key={1}
            
            className="d-flex flex-column w-100 align-items-center" style={{maxWidth: "600px"}}>
                <Title1 style={{textAlign: "center"}}><Bolder>Crea tu cuenta</Bolder></Title1>
                <Title3 style={{textAlign: "center", marginTop: 20, marginBottom: 40}}>Para empezar crea tu cuenta</Title3>
                <InputBox name="email" onChange={handleChange} placeholder="Email..."></InputBox>
                <TitleErrorRegister error={errors.email}/>
                <InputBox type="password"  name="password" onChange={handleChange} placeholder="Contraseña..."></InputBox>
                <TitleErrorRegister error={errors.password}/>
                <InputBox type="password" name="confirmpassword" onChange={handleChange} placeholder="Repetir contraseña..."></InputBox>
                <TitleErrorRegister error={errors.confirmpassword}/>
                <TitleErrorRegister error={emailErrors}/>
                <ButtonMain onClick={handleSubmit} enabled={false} style={{maxWidth: 500, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "100px"}}>Siguiente</ButtonMain>
            </motion.div>
        ,

            <motion.div 
            initial= {{y: 160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{y: -200, opacity: 0}}
                    
                    key={2}
            
            className="d-flex flex-column w-100 align-items-center" style={{maxWidth: "600px"}}>

            <Title1 style={{textAlign: "center"}}>Hola <Bolder>{values.name},</Bolder></Title1>
            <Title3 style={{textAlign: "center", marginTop: 20, marginBottom: 40}}>Añade tus datos básicos</Title3>
            <InputBox name="name" value={values.name} onChange={handleChange} placeholder="nombre..."></InputBox>
            <TitleErrorRegister error={errors.name}/>
            <InputBox name="surname" value={values.surname} onChange={handleChange} placeholder="apellidos..."></InputBox>
            <TitleErrorRegister error={errors.surname}/>
            <ButtonMain onClick={handleSubmit} style={{maxWidth: 500, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "100px"}}>Siguiente</ButtonMain>
        </motion.div>,
        <motion.div
        
            initial= {{y: 160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{y: -200, opacity: 0}}
                    
                    key={3}
        
        
        className="d-flex flex-column w-100 align-items-center" >

            <Title1><Bolder>Elige tu plan</Bolder></Title1>

            <Row className="w-100 justify-content-center">
                <PriceCard makeSelection={handleSubmit}/>
            </Row>

        </motion.div>

        ,

            <motion.div 
            initial= {{y: 160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{y: -200, opacity: 0}}
                    
                    key={4}
            
            className="d-flex flex-column w-100 align-items-center" style={{maxWidth: "600px"}}>
            <Title1 style={{textAlign: "center"}}>Genial, <Bolder>{values.name}</Bolder></Title1>
            <Title3 style={{textAlign: "center", marginTop: 20, marginBottom: 40}}>¡{values.name}! <span style={{fontWeight: 600, color : Themes.beylColor}}>necesitamos tu ayuda</span>, con el fin de adaptar Beyl a tus necesidades, nos sería de gran ayuda que te unieras a nuestro<span style={{fontWeight: 600, color : Themes.beylColor}}> grupo de telegram</span> para "Founders".</Title3>
            <SvgRegisterFinish></SvgRegisterFinish>
            <a target="blank" className="w-100 m-0 p-0 d-flex justify-content-center" href={"http://t.me/joinchat/IJEwQVrG3AVyw8R9"}>
                <ButtonMain icon={<FaTelegramPlane size={25}/>} style={{maxWidth: 500, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "100px", backgroundColor: "#0088CC"}}>Unirme al grupo</ButtonMain>
            </a>
            <ButtonMain icon={<FaFire size={22}></FaFire>} onClick={handleSubmit} style={{maxWidth: 500, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "15px"}}>Crear cuenta</ButtonMain>
        </motion.div>

    ]

    const next = async (data : any, bag : any) => {
        console.log(number)

        if(4 > number){

            if(number === 1){

                try{
                    console.log("hello")
                    const em = await athletes.verifyEmail(data.email)
                    if(!em.ok){
                        setEmailErrors("Este email ya existe")
                        return;
                    }
                }catch(err ){
                    setEmailErrors("Este email ya existe")
                    return;
                }

            }



            setNumber(number + 1)

        }else{
            bag.setTouched({});
            console.log(data)
            dispatch(authRegister(data.email, data.password, data.name, data.surname))
            console.log(data)

        }

    }

    return (
        <motion.div 

        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{duration: 0.4}}
        exit={{opacity: 0}}


        
        style={{height: "100vh"}} className="justify-content-stretch align-items-stretch">

            <SidebarSelector backgroundColor={theme.colors.secondary}>

                    <BeylIcon size="70px"></BeylIcon>


                    <div className="mt-5 align-items-center">

                        <span style={{backgroundColor: theme.colors.textPrimary, width:2, height:220, position: "absolute", marginLeft: 44, zIndex: -1, marginTop: 20}}></span>
                        <RegisterPoint numero = {1} titulo = {"Cuenta"} menu={number} ></RegisterPoint>
                        <RegisterPoint numero = {2} titulo = {"Tu información"} menu = {number}></RegisterPoint>
                        <RegisterPoint numero = {3} titulo = {"Elige tu plan"} menu = {number}></RegisterPoint>
                        <RegisterPoint numero = {4} titulo = {"Comienza a entrenar"} menu = {number}></RegisterPoint>

                    </div>


            </SidebarSelector>

                <ContainerSidebarSelector>
                    <Link to="/login">
                        <motion.div
                        
                        whileHover={{ x: -10.05 }}
                        whileTap={{ scale: 0.9 }}
                        
                        className="position-absolute p-4 d-flex align-items-center">
                            <Icon>
                                <FaArrowLeft size={30}></FaArrowLeft>
                            </Icon>
                            <Title3 style={{marginLeft: 15}}>Volver al login</Title3>
                        </motion.div>
                    </Link>
                    <div className="w-100 p-3 d-flex flex-column align-items-center justify-content-center" style={{height: "99vh"}}>
                        <Formik validationSchema={validations[number - 1]} initialValues={{email : "", password : "", confirmpassword: "" , name : "", surname: ""}} onSubmit={next}>
                            {
                                (functions) => (
                                <AnimatePresence exitBeforeEnter>
                                    {
                                    menu(functions)[number - 1]
                                    }
                                </AnimatePresence>
                                )

                            }
                        </Formik>
                    </div>
                </ContainerSidebarSelector>
        </motion.div>
    )
}
