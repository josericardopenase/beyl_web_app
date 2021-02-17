import { Formik } from 'formik'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import useThemes from '../../../CustomHooks/useThemes'
import ButtonMain from '../../General/Constants/Button/ButtonMain'
import ProfilePicIcon from '../../General/Constants/Icons/ProfilePicIcon'
import Loading from '../../General/Constants/Loading/Loading'
import { Bolder } from '../../General/Constants/Text/Bolder'
import Input from '../../General/Constants/Text/Inputs/Input'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title2 } from '../../General/Constants/Text/Title2'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Title4 } from '../../General/Constants/Text/Title4'
import Themes from '../../General/Styles/Themes'

export default function Profile() {


    const themes = useThemes()
    const [modifying, setModifying] = useState<boolean>(true)
    const user = useSelector((state : any) => state.auth.user)

    if(!user){
        return <Loading></Loading>
    }

    return (
        <div className="p-5 w-100">
            <Title1><Bolder>Ajustes</Bolder></Title1>
            <Title3 style={{marginTop: 10}}>Editar perfil</Title3>

            { modifying ? (


                <Formik initialValues={{'nombre' : '', 'apellido' :  '', 'email' : ''}} onSubmit = {(data : any) => console.log(data)} >

                    {

                        ({handleSubmit}) => (
                            <div className="w-100 mt-4">
                                <Title4>Nombre:</Title4>
                                <Row className="mt-3">
                                    <Col>
                                        <Input placeholder="Modifica tu nombre" defaultValue={user.user.first_name} style={{backgroundColor: themes.colors.secondary, width: "100%", padding: 11 }} ></Input> 
                                </Col>
                                    <Col>
                                        <Input placeholder="Modifica tu nombre" defaultValue={user.user.last_name} style={{backgroundColor: themes.colors.secondary, width: "100%", padding: 11 }} ></Input> 
                                </Col>
                                
                                </Row>

                                <div className="mt-3">
                                    <Title4>Email:</Title4>
                                    <Input placeholder="Modifica tu email" defaultValue={user.user.email} style={{backgroundColor: themes.colors.secondary, width: "100%", padding: 11, marginTop: 10}} ></Input> 
                                </div>




                                <div className="mt-3 mb-3" >
                                    <Title4 color={Themes.beylColor}><Bolder>Cambiar contraseña</Bolder></Title4>
                                    <ButtonMain className="mt-3 bigger-hover" style={{width: "fit-content"}}>Guardar</ButtonMain>
                                </div>

                            </div>
                            
                        )

                    }

                </Formik>
            )
            : 
            (
                <div className="mt-4">
                    <div className="d-flex align-items-center">
                        <ProfilePicIcon size={90} url={"http://192.168.0.14:9000" + user.user.profile_pic}></ProfilePicIcon>
                        <div className="ml-4">
                            <Title2>{user.user.first_name + " " + user.user.last_name} </Title2>
                            <Title3 color="secondary">{user.user.email}</Title3>
                        </div>
                    </div>
                </div>
            )

            }
        </div>
    )
}
