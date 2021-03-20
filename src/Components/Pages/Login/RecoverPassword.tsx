import { Formik } from 'formik'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FaArrowLeft, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useThemes from '../../../CustomHooks/useThemes'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title2 } from '../../General/Constants/Text/Title2'
import { Title3 } from '../../General/Constants/Text/Title3'
import * as Yup from 'yup'
import FormikInput from '../../General/Constants/Text/Inputs/FormikInput'
import ButtonMain from '../../General/Constants/Button/ButtonMain'
import useApi from '../../../CustomHooks/useApi'
import apiUser from '../../../Api/apiUser'
import { Title4 } from '../../General/Constants/Text/Title4'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),

})

export default function RecoverPassword() {

    const theme = useThemes();
    const [success, setSuccess] = useState<string>("")

    const handleRecover = async (data : any) => {


        await apiUser.sendRecoverPassword(data.email)
        setSuccess("Te hemos enviado un email para cambiar tu contraseña, revisa tu buzón 😼")


    }

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
            <Title1><Bolder>Recupera tu contraseña</Bolder></Title1> 
            <Formik validationSchema={validationSchema} initialValues={{email : ''}} onSubmit={(data : any) => handleRecover(data)}>
                {
                    ({handleSubmit, resetForm, values}) => (
                        <div className="mt-4">
                            <FormikInput primary={true} className="p-2" value={values.email} name = "email" placeholder = "¿Cual es el email de tu cuenta?" icon={<FaMailBulk></FaMailBulk>}></FormikInput>
                            <ButtonMain className="mt-3" onClick = {() => { handleSubmit();  }}>Enviar email de recuperación</ButtonMain>
                            { success != "" ? <Title4 style={{marginTop: 10}} color="#00b700">{success}</Title4>: null}
                        </div>
                    )

                }
            </Formik>

        </div>
        </motion.div>
    )
}
