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
import { FaBullhorn, FaCookie, FaDochub, FaLock } from 'react-icons/fa'
import { Icon } from '../../General/Constants/Icons/Icon'


export default function Privacidad() { 

    const themes = useThemes()





    return (
        <div className="p-5 w-100">
            <Title1><Bolder>Privacidad y seguridad</Bolder></Title1>


            <div className="mt-5">
                <a target="blank" href="https://www.beylapp.com/privacidad/" className="d-flex align-items-center">

                    <Icon>
                        <FaLock style={{marginTop: 10}}></FaLock>
                    </Icon>

                    <Title3 style={{marginTop: 10, marginLeft: 20}}>Política de privacidad</Title3>
                </a>
                <a target="blank" href="https://www.beylapp.com/cookies/" className="d-flex align-items-center mt-2">

                    <Icon>
                        <FaCookie style={{marginTop: 10}}></FaCookie>
                    </Icon>
                    <Title3 style={{marginTop: 10, marginLeft: 20}}>Política de cookies</Title3>
                </a>
                <a target="blank" href="https://www.beylapp.com/aviso_legal/" className="d-flex align-items-center mt-2">

                    <Icon >
                        <FaBullhorn style={{marginTop: 10}}> </FaBullhorn>
                    </Icon>
                    <Title3 style={{marginTop: 10, marginLeft: 20}}>Aviso legal</Title3>
                </a>
            </div>
        </div>
    )
}
