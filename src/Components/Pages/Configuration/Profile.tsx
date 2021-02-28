import { Formik } from 'formik'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import useThemes from '../../../CustomHooks/useThemes'
import ButtonOutline from '../../General/Constants/Button/ButtonOutline'
import ProfilePicIcon from '../../General/Constants/Icons/ProfilePicIcon'
import Loading from '../../General/Constants/Loading/Loading'
import { Bolder } from '../../General/Constants/Text/Bolder'
import FormikInput from '../../General/Constants/Text/Inputs/FormikInput'
import FormikImageUpload from '../../General/Constants/Text/Inputs/FormikImageUpload'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title2 } from '../../General/Constants/Text/Title2'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Title4 } from '../../General/Constants/Text/Title4'
import Themes from '../../General/Styles/Themes'
import * as Yup from 'yup'
import Plan from './Components/Plan'
import { changePassword, modifyProfile } from '../../../Store/authentication'
import FormikProfileImageUpload from '../../General/Constants/Text/Inputs/FormikProfileImageUpload'
import TitleError from '../../General/Constants/Text/TitleError'
import VerticallyCenteredModal from '../../General/Constants/Modals/VerticallyCenteredModal'
import ButtonMain from '../../General/Constants/Button/ButtonMain'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    first_name : Yup.string().required(),
    last_name : Yup.string().required(),
})

const passwordValidationSchema = Yup.object().shape({
    old_password: Yup.string().required(),
    new_password : Yup.string().required().label("Password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Tiene que tener una mayúscula, al menos un  \n número y mínimo 8 ca      rácteres"
)
})


function ChangePasswordPopUp({show, onClick} : any){


    const theme = useThemes()
    const dispatch = useDispatch()
    const errors = useSelector((store : any) => store.auth.errors)


    return (
        <VerticallyCenteredModal
            title={"Cambia tu contraseña"}
            footer={<></>}
            show = {show}
            onHide = {() =>  onClick()}
            animated={false}
        >
            <Formik validationSchema={passwordValidationSchema} initialValues={{new_password: '', old_password: ''}} 
            onSubmit = {(data : any) => {
                dispatch(changePassword(data))
                }} >
            {
                ({handleSubmit})=>(
                    <>
                        <FormikInput type="password" style={{backgroundColor: theme.colors.secondary, width: "100%", padding: 10}} name="old_password" placeholder="contraseña"></FormikInput>
                        <FormikInput type="password"style={{backgroundColor: theme.colors.secondary, width: "100%", marginTop: 20, padding: 10}} name="new_password" placeholder="Nueva contraseña"></FormikInput>
                        {errors ? <TitleError>{errors['old_password']}</TitleError> : null}
                        <ButtonMain onClick={handleSubmit} style={{width: "object-fit", marginTop: 20}}>Cambiar la contraseña</ButtonMain>
                    </>

                )

            }
            
            </Formik>
        </VerticallyCenteredModal>
    )
}


export default function Profile() { 

    const themes = useThemes()
    const [modifying, setModifying] = useState<boolean>(false)
    const user = useSelector((state : any) => state.auth.user)
    const auth = useSelector((state : any) => state.auth)
    const [changePassword, setChangePassword] = useState(false);
    const dispatch = useDispatch();

    if(!user || auth.loading){
        return <Loading></Loading>
    }

    const handleSubmit = (data : any) =>{

        if(data.first_name != user.user.first_name || data.last_name !== user.user.last_name || data.email !== user.user.email || data.profile_pic !== user.user.profile_pic){
            if(data.profile_pic === user.user.profile_pic){
                delete data.profile_pic
            }

            dispatch(modifyProfile(data))
        }else{
            return;
        }


    }

    return (
        <div className="p-5 w-100">
            <Title1><Bolder>Ajustes</Bolder></Title1>
            <Title3 style={{marginTop: 20}}>Editar perfil</Title3>

            { modifying ? (


                <Formik validationSchema={validationSchema} initialValues={{'first_name' : user.user.first_name, 'last_name' :  user.user.last_name, 'email' : user.user.email, 'profile_pic' : user.user.profile_pic}} onSubmit = {(data : any) => handleSubmit(data)} >

                    {

                        ({handleSubmit}) => (
                            <div className="w-100 mt-4">

                                <Title4>imagen de perfil:</Title4>

                                    <FormikProfileImageUpload name="profile_pic"></FormikProfileImageUpload>

                                    { auth.errors ? <TitleError style={{marginBottom : 10}}>{auth.errors['profile_pic']}</TitleError> : null }

                                <Title4>Nombre:</Title4>
                                <Row className="mt-3">
                                    <Col>
                                        <FormikInput name="first_name" placeholder="Modifica tu nombre" defaultValue={user.user.first_name} style={{backgroundColor: themes.colors.secondary, width: "100%", padding: 11 }} ></FormikInput> 
                                </Col>
                                    <Col>
                                        <FormikInput name="last_name" placeholder="Modifica tu nombre" defaultValue={user.user.last_name} style={{backgroundColor: themes.colors.secondary, width: "100%", padding: 11 }} ></FormikInput> 
                                </Col>
                                
                                </Row>

                                <div className="mt-3">
                                    <Title4>Email:</Title4>
                                    <FormikInput name="email" placeholder="Modifica tu email" defaultValue={user.user.email} style={{backgroundColor: themes.colors.secondary, width: "100%", padding: 11, marginTop: 10}} ></FormikInput> 
                                    { auth.errors ? <TitleError>{auth.errors['email']}</TitleError> : null }
                                </div>




                                <div className="mt-4 mb-3" >
                                    <div style={{cursor: "pointer"}} onClick={() => setChangePassword(true)}>
                                        <Title4 style={{marginBottom: 10}} color={Themes.beylColor}><Bolder>Cambiar contraseña</Bolder></Title4>
                                    </div>
                                    <div className="d-flex">
                                        <ButtonOutline onClick={() => setModifying(false)} className="mt-3 bigger-hover" style={{width: "fit-content", marginRight: 15}}>Cancelar</ButtonOutline>
                                        <ButtonOutline onClick={handleSubmit} className="mt-3 bigger-hover" style={{width: "fit-content"}}>Guardar</ButtonOutline>
                                    </div>
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
                        <ProfilePicIcon size={90} url={user.user.profile_pic}></ProfilePicIcon>
                        <div className="ml-4">
                            <Title2>{user.user.first_name + " " + user.user.last_name} </Title2>
                            <Title3 color="secondary">{user.user.email}</Title3>
                        </div>
                    </div>

                    <ButtonOutline onClick={() => setModifying(true)} style={{width: "fit-content", marginTop: 20}}>Modificar perfil</ButtonOutline>
                    <Plan></Plan>
{/*                     <ButtonOutline style={{width: "fit-content", marginTop: 20}}>Cambiar plan</ButtonOutline> */}
                </div>
            )

            }
            <ChangePasswordPopUp show={changePassword} onClick={() => setChangePassword(false)}></ChangePasswordPopUp>
        </div>
    )
}
