import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
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


export default function Register() {

    const theme = useThemes()


    const [number, setNumber] = useState(1)

    const menu = ({handleChange, handleBlur, handleSubmit, values } : FormikProps<any>) => [

        <div className="d-flex flex-column w-100 align-items-center" style={{maxWidth: "600px"}}>
            <Title1 style={{textAlign: "center"}}><Bolder>Crea tu cuenta</Bolder></Title1>
            <Title3 style={{textAlign: "center", marginTop: 20, marginBottom: 40}}>Para empezar crea tu cuenta</Title3>
            <InputBox name="email" onChange={handleChange} placeholder="Email..."></InputBox>
            <InputBox type="password"  name="password" onChange={handleChange} placeholder="Contraseña..."></InputBox>
            <InputBox type="password" onChange={handleChange} placeholder="Repetir contraseña..."></InputBox>
            <ButtonMain onClick={handleSubmit} enabled={false} style={{maxWidth: 500, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "100px"}}>Siguiente</ButtonMain>
        </div>
        ,

        <div className="d-flex flex-column w-100 align-items-center" style={{maxWidth: "600px"}}>
            <Title1 style={{textAlign: "center"}}><Bolder>Hola {values.name} .</Bolder></Title1>
            <Title3 style={{textAlign: "center", marginTop: 20, marginBottom: 40}}>Añade tus datos básicos</Title3>
            <InputBox name="name" defaultValue="" onChange={handleChange} placeholder="nombre..."></InputBox>
            <InputBox name="surname" defaultValue={""} onChange={handleChange} placeholder="apellidos..."></InputBox>
            <ButtonMain onClick={handleSubmit} style={{maxWidth: 500, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "100px"}}>Siguiente</ButtonMain>
        </div>,
        <div>

        </div>,
        <div></div>
    ]

    const next = (data : any) => {

        if(menu.length <= number){

            setNumber(number + 1)

        }else{

            console.log(data)

        }

    }

    return (
        <div style={{height: "100vh"}} className="justify-content-stretch align-items-stretch">

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
                <div className="w-100 p-3 d-flex flex-column align-items-center justify-content-center" style={{height: "99vh"}}>
                    <Formik initialValues={{email : null, password : null , name : null, surname: null}} onSubmit={next}>

                        {
                            (functions) => (
                                menu(functions)[number - 1]
                            )
                        }

                    </Formik>
                </div>
            </ContainerSidebarSelector>
        </div>
    )
}
