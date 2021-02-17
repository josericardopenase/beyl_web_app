import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title3 } from '../../General/Constants/Text/Title3'
import login from '../../../MediaFiles/login.png'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { TitleResizable } from '../../General/Constants/Text/TitleResizable'
import { Formik } from 'formik'
import Input from '../../General/Constants/Text/Inputs/Input'
import ButtonMain from '../../General/Constants/Button/ButtonMain'
import { FaEnvelope, FaLock, FaMailBulk } from 'react-icons/fa'
import TitleError from '../../General/Constants/Text/TitleError'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import loginImage from '../../../MediaFiles/loginImage.png' 
import {authLogin} from '../../../Store/authentication'
import { BeylIcon } from '../../General/Constants/Icons/BeylIcon'
import Themes from '../../General/Styles/Themes'
import useThemes from '../../../CustomHooks/useThemes'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password : Yup.string().required(),

})

export default function Login() {

    const imageStyle = {
        backgroundImage: `    
        linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
        ), url(${loginImage}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    } as React.CSSProperties

    const dispatch = useDispatch()
    const apiErrors  = useSelector((state : any) => state.auth.errors)
    const themes = useThemes()
    
    const performLogin = ({email, password} : any) => {
        dispatch(authLogin(email, password))

    }

    return (

        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{duration: 0.4}}
        exit={{opacity: 0}}

        >
        <Container fluid>
            <BeylIcon style={{position: "absolute", margin: "1rem"}} size={80}></BeylIcon>
            <Row style={{height: "100vh"}}>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <motion.div style={{paddingRight: 100, paddingLeft: 100}}
                    
                        initial={{opacity: 0, y : 400}}
                        animate={{ opacity: 1, y:0 }}
                        transition={{duration: 0.4}}
                        exit={{opacity: 0, y: 400}}
                    
                    >
                        <Title1 style={{marginBottom: 40}}><Bolder>Bienvenido, <br/> Inicia sesión y empieza</Bolder></Title1> 

                        <Formik validationSchema={validationSchema} initialValues={{email : '', password : ''}} onSubmit={(data : any) => performLogin(data)}>
                            {
                                ({handleChange, handleSubmit, errors}) => (
                                    <>
                                        <Input name="email" onChange={handleChange} icon={<FaEnvelope/>} style={{padding: 10, width : "100%", maxWidth: "600px"}} placeholder="Correo" primary={true}></Input>
                                        { errors.email ? <TitleError>{errors.email}</TitleError> : null}
                                        <div className="mt-3">
                                            <Input name="password" onChange={handleChange} type="password" icon = {<FaLock></FaLock>} style={{padding: 10, width : "100%",   maxWidth: "600px"}} placeholder="contraseña" primary={true}></Input>
                                            { errors.password ? <TitleError>{errors.password}</TitleError> : null}
                                        </div>

                                        <Row>

                                            <Col xs={7}>
                                                <ButtonMain onClick={handleSubmit} style={{marginTop: 20, textAlign : "center",  maxWidth: "600px"}}>
                                                        
                                                    Log in
                                                    
                                                </ButtonMain>
                                            </Col>
                                            <Col className="pl-0">

                                                <Link to="/register">

                                                    <ButtonMain style={{marginTop: 20, textAlign : "center",  maxWidth: "600px", backgroundColor: themes.colors.secondary}}>
                                                            
                                                        Register
                                                        
                                                    </ButtonMain>

                                                </Link>
                                                
                                            </Col>

                                        </Row>
                                        { apiErrors ? <TitleError>{"Dirección de correo electrónico o contraseña incorrectos"}</TitleError> : null}
                                    </>
                                )
                            }
                        </Formik>
                    </motion.div>
                </Col>

                <Col style={imageStyle} className="d-flex flex-column justify-content-center align-items-center">
                    <motion.div
                    
                        initial={{opacity: 0, y : 400}}
                        animate={{ opacity: 1, y:0 }}
                        transition={{duration: 0.4, delay: 0.4}}
                        exit={{opacity: 0, y: 400}}
                    
                    
                    >
                        <TitleResizable style={{ fontSize: 80}}><Bolder>
                            Train<br/>
                            Eat<br/>
                            Sleep<br/>
                            Repeat.<br/>
                        </Bolder></TitleResizable> 
                    </motion.div>
                </Col>
            </Row>
        </Container>
        </motion.div>
    )
}
