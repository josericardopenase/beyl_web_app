import { FormikConfig, FormikHandlers, FormikState, useFormikContext } from 'formik'
import React from 'react'
import { FaCamera, FaImage } from 'react-icons/fa'
import useThemes from '../../../../../CustomHooks/useThemes'
import { Icon } from '../../Icons/Icon'
import TitleError from '../TitleError'
import Input from './Input'

export default function FormikImageUpload(props : any) {

    const formik = useFormikContext<any>()
    const name : string = props.name
    const theme = useThemes()


    return (
        <div>
            <label className="text-center" htmlFor={name} style={
                {

                color: theme.colors.textSecondary, 
                width: "100%", 
                backgroundColor: theme.colors.secondary, 
                padding: 50, 
                marginTop: 20, 
                marginBottom: 20, 
                borderRadius: 20,
                border: `2px ${theme.colors.tertiary} solid`,
                borderStyle: "dashed"
            }
            }
            >
                <FaCamera size={60} className="mb-2" color={theme.colors.textSecondary}
                ></FaCamera>
                <br></br>
                Upload image
                
            </label>
            <Input type="file" id={name}  onChange={formik.handleChange} onBlur={() => formik.setFieldTouched(name)} name={name} style={{display: "None"}}  {...props}></Input>
            {formik.values[name]}
            { formik.errors[name] && formik.touched[name] ? <TitleError>{formik.errors[name]}</TitleError> : null}
        </div>
    )
}
