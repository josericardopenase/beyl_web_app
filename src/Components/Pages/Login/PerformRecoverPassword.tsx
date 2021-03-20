import { Formik } from 'formik'
import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowLeft, FaLock, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useThemes from '../../../CustomHooks/useThemes'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title2 } from '../../General/Constants/Text/Title2'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Title4 } from '../../General/Constants/Text/Title4'
import * as Yup from 'yup'
import FormikInput from '../../General/Constants/Text/Inputs/FormikInput'
import ButtonMain from '../../General/Constants/Button/ButtonMain'
import apiUser from '../../../Api/apiUser'
import useApiCallback from '../../../CustomHooks/useApiCallback'
import logo from '../../../MediaFiles/logobeyl.png'
import useApi from '../../../CustomHooks/useApi'
import Loading from '../../General/Constants/Loading/Loading'

const validationSchema = Yup.object().shape({
    password : Yup.string().required().label("Password").matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                "Tiene que tener una mayúscula, al menos un  \n número y mínimo 8 ca      rácteres"
        )
        ,
    confirm_password: Yup.string().required().when("password", {
        is: (val : any) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Las contraseñas tienen que ser las mismas"
        )
    })

})

export default function PerformRecoverPassword(props : any) {

    const theme = useThemes();

    const token = props.match.params.token

    const apiChangePassword = useApi(apiUser.recoverPassword)

    const handleRecover = (data : any) => {

        apiChangePassword.request(token, data.password)

    }


    if(apiChangePassword.loadingRequest)
        return (<Loading></Loading>)

    if(apiChangePassword.finish)
        return  (

        <motion.div 
            initial= {{y: 160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{y: -200, opacity: 0}}
                    key={1230}
        
        className="w-100 align-items-center justify-content-center d-flex flex-column" style={{height: "100vh"}} >
            {
                !apiChangePassword.error ?
                    <>
                        <Title2><Bolder>Contraseña cambiada</Bolder></Title2>
                        <Title4 color="secondary" style={{marginTop: 10}}>Todo listo, ya puedes iniciar sesión</Title4>

                        <svg className="mt-5" width="100%" height="231" viewBox="0 0 330 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="165.001" cy="165.351" r="164.841" fill="#272B2F"/>
                            <path d="M159.345 196.199L159.345 196.199C155.896 199.648 150.302 199.649 146.85 196.199C146.85 196.199 146.85 196.199 146.85 196.199L121.451 170.798L121.451 170.798C118.001 167.349 118.001 161.754 121.451 158.304C124.901 154.854 130.495 154.854 133.944 158.303L134.297 157.949L133.944 158.303L152.746 177.105L153.1 177.459L153.453 177.105L196.055 134.504C199.505 131.053 205.099 131.056 208.548 134.504C211.997 137.954 211.997 143.546 208.549 146.998L159.345 196.199Z" fill="#22A447" stroke="#272B2F"/>
                            <circle cx="165" cy="165.351" r="90.621" stroke="#22A447" stroke-width="8"/>
                        </svg>

                        
                        <Link to="/login" className="w-100 d-flex justify-content-center">
                            <ButtonMain enabled={false} style={{maxWidth: 500, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "60px"}}>Perfecto</ButtonMain>
                        </Link>



                    </>
                :
                    <>
                        <Title2><Bolder>Ha ocurrido un error</Bolder></Title2>
                        <Title4 color="secondary" style={{marginTop: 10}}>Lo sentimos, prueba con otra dirección</Title4>

                        <svg width="190" height="190" className="mt-5" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="95" cy="95.1709" r="90.621" stroke="#FD413C" stroke-width="8"/>
                            <g clip-path="url(#clip0)">
                            <path d="M103.887 95.2517L141.657 57.0913C144.115 54.6091 144.115 50.5958 141.657 48.1136C139.2 45.6314 135.227 45.6314 132.771 48.1136L94.9995 86.274L57.2296 48.1136C54.7716 45.6314 50.8003 45.6314 48.3435 48.1136C45.8855 50.5958 45.8855 54.6091 48.3435 57.0913L86.1134 95.2517L48.3435 133.412C45.8855 135.894 45.8855 139.908 48.3435 142.39C49.5679 143.628 51.1778 144.25 52.7865 144.25C54.3953 144.25 56.004 143.628 57.2296 142.39L94.9995 104.229L132.771 142.39C133.996 143.628 135.605 144.25 137.214 144.25C138.822 144.25 140.431 143.628 141.657 142.39C144.115 139.908 144.115 135.894 141.657 133.412L103.887 95.2517Z" fill="#FD413C"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="97" height="98" fill="white" transform="translate(46.5 46.1709)"/>
                            </clipPath>
                            </defs>
                        </svg>

                    </>

            }

            <img className="mt-5" width="90px" src={logo}></img>

        </motion.div>
        )
    

    return (
        <motion.div 
        
            initial= {{y: 160, opacity: 0}}
                    animate={{y : 0, opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{y: -200, opacity: 0}}
                    
                    key={100}
        className="w-100 d-flex justify-content-center align-items-center flex-column" style={{height: "100vh"}}>
            
        <div>
            <Link to="/login">
                <motion.div
                
                            whileHover={{ x: -10.05 }}


                className="d-flex mb-4 " style={{cursor: "pointer"}}>
                    <FaArrowLeft color={theme.colors.textPrimary} size={25} style={{marginRight: 20}}/>
                    <Title3>Volver atrás</Title3>
                </motion.div>
            </Link>
            <Title1><Bolder>Cambia tu contraseña</Bolder></Title1> 
            <Formik validationSchema={validationSchema} initialValues={{password : '', confirm_password: ''}} onSubmit={(data : any) => handleRecover(data)}>
                {
                    ({handleSubmit}) => (
                        <div className="mt-4">

                            <div className="mb-3">
                                <FormikInput primary={true} type="password" className="p-2" name = "password" placeholder = "Nueva contraseña" icon={<FaLock></FaLock>}></FormikInput>
                            </div>

                            <FormikInput primary={true} type="password" className="p-2" name = "confirm_password" placeholder = "Repita la nueva contraseña" icon={<FaLock></FaLock>}></FormikInput>
                            <ButtonMain className="mt-3" onClick = {handleSubmit}>Cambiar</ButtonMain>
                        </div>
                    )

                }
            </Formik>

        </div>
        </motion.div>
    )
}
