import { FormikConfig, FormikHandlers, FormikState, useFormikContext } from 'formik'
import React from 'react'
import TitleError from '../TitleError'
import Input from './Input'

export default function FormikInput(props : any) {

    const formik = useFormikContext<any>()
    const name : string = props.name


    return (
        <div>
            <Input onChange={formik.handleChange} onBlur={() => formik.setFieldTouched(name)} name={name} placeholder={props.placeholder} {...props}></Input>
            { formik.errors[name] && formik.touched[name] ? <TitleError>{formik.errors[name]}</TitleError> : null}
        </div>
    )
}
