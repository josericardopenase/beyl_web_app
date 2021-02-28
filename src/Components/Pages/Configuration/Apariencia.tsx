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
import { modifyProfile } from '../../../Store/authentication'
import FormikProfileImageUpload from '../../General/Constants/Text/Inputs/FormikProfileImageUpload'
import TitleError from '../../General/Constants/Text/TitleError'
import ThemeSwitchToggle from '../../General/Constants/Button/ThemeSwitchToggle'


export default function Apariencia() { 

    const themes = useThemes()





    return (
        <div className="p-5 w-100">
            <Title1><Bolder>Apariencia</Bolder></Title1>


            <div className="d-flex justify-content-between mt-5">
                <Title3>Cambia el color del tema</Title3>
                <ThemeSwitchToggle></ThemeSwitchToggle>
            </div>
        </div>
    )
}
