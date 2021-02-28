import { FormikConfig, FormikHandlers, FormikState, useFormikContext } from 'formik'
import React from 'react'
import TitleError from '../TitleError'
import Input from './Input'
import TextArea from './TextArea'

export default function FormikTextArea(props : any) {

    const formik = useFormikContext<any>()
    const name : string = props.name


    return (
        <div>
            <TextArea onChange={formik.handleChange} onBlur={() => formik.setFieldTouched(name)} name={name}  {...props}></TextArea>
            { formik.errors[name] && formik.touched[name] ? <TitleError>{formik.errors[name]}</TitleError> : null}
        </div>
    )
}
