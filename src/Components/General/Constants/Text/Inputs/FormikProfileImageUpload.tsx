import { FormikConfig, FormikHandlers, FormikState, useFormikContext } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { FaCamera, FaImage } from 'react-icons/fa'
import useThemes from '../../../../../CustomHooks/useThemes'
import { Icon } from '../../Icons/Icon'
import TitleError from '../TitleError'
import Input from './Input'
import ImageUploader from 'react-images-upload';

function Thumb(props : any){


    const theme = useThemes()
    const [highLight, setHighLight] = useState(false);

    return (
  
        <div className="position-relative" onMouseEnter={() => setHighLight(true)} onMouseLeave={() => setHighLight(false)}>
            <img src={props.file}
            height={150}
            width={150} 
            className="m-3"
            style={{
                
                borderRadius: "50%", 
                objectFit:"cover", 
                border: highLight ? `2px ${theme.colors.textSecondary} solid` : "2px transparent solid",
                transition: "0.4s all ease"

            }}
            />
            <div style={{width: 40, height: 40, backgroundColor: theme.colors.secondary, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", position : "absolute", bottom : 0, right: 0, margin: 20,
                border: highLight ? `2px ${theme.colors.textSecondary} solid` : "2px transparent solid",

                transition: "0.4s all ease"
        }}>
                <FaCamera color={theme.colors.textPrimary}></FaCamera>
            </div>
        </div>
    )
  }
  
export default function FormikProfileImageUpload(props : any) {

    const formik = useFormikContext<any>()
    const name : string = props.name
    const imageRef = useRef<any>()

    const onChange = (e : any) => {

        const file = imageRef.current.files[0]

        const fileReader : FileReader = new FileReader()

        fileReader.onload = (event : any) => {
            formik.setFieldValue(name, event.target.result)
        }

        fileReader.readAsDataURL(imageRef.current.files[0])

        
    }


    return (
        <div>

            <>
            <label className="text-center" htmlFor={name} >
                    <Thumb file={formik.values[name]}></Thumb>
            </label>
            <Input customref={imageRef} type="file" id={name}  onChange={(e : any) => onChange(e)} onBlur={() => formik.setFieldTouched(name)} name={name} style={{display: "None"}}  {...props}></Input>
            { formik.errors[name] && formik.touched[name] ? <TitleError>{formik.errors[name]}</TitleError> : null}
            
            </>
        </div>
    )
}
