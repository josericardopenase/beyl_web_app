import { FormikConfig, FormikHandlers, FormikState, useFormikContext } from 'formik'
import React, { useRef, useState } from 'react'
import { FaCamera, FaImage, FaVideo } from 'react-icons/fa'
import useThemes from '../../../../../CustomHooks/useThemes'
import { Icon } from '../../Icons/Icon'
import TitleError from '../TitleError'
import Input from './Input'

interface IProps{
    isVideo : boolean,
    name : string

}

function Thumb(props : any){


    const theme = useThemes()

    const [highLight, setHighLight] = useState(false);

    return (
  
        <div className="position-relative" onMouseEnter={() => setHighLight(true)} onMouseLeave={() => setHighLight(false)}>

            {

                !props.isVideo ?

                <img src={props.file}
                height={"100%"}
                width={"100%"} 

                style={{
                    objectFit:"cover", 
                    border: highLight ? `2px ${theme.colors.textSecondary} solid` : "2px transparent solid",
                    transition: "0.4s all ease"

                }}
                />

                :

                <video src={props.file}
                height={"100%"}
                width={"100%"} 
                style={{
                    objectFit:"cover", 
                    border: highLight ? `2px ${theme.colors.textSecondary} solid` : "2px transparent solid",
                    transition: "0.4s all ease"

                }}
                />

            }
        </div>
    )
  }

export default function FormikImageUpload(props : IProps) {


    const formik = useFormikContext<any>()
    const name : string = props.name
    const imageRef = useRef<any>()
    const theme = useThemes();

    const onChange = (e : any) => {
        const fileTypes = props.isVideo ?  ['mp4', 'avi']  : ['jpg', 'jpeg', 'png'];


        const file = imageRef.current ? imageRef.current.files[0] : null

        if(file){
            if(!fileTypes.includes(file.name.split('.').pop().toLowerCase()))
                return;
            
            
            const fileReader : FileReader = new FileReader()

            fileReader.onload = (event : any) => {
                formik.setFieldValue(name, event.target.result)
            }

            fileReader.readAsDataURL(imageRef.current.files[0])

        }
        
    }


    return (
        <div>
            <label className="text-center" htmlFor={name} style={
                
                !formik.values[name] ?
                
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

                :
                {

                    color: theme.colors.textSecondary, 
                    width: "100%", 
                    backgroundColor: theme.colors.secondary, 
                    border: `2px ${theme.colors.tertiary} solid`,
                    borderStyle: "dashed"
                }
            }
            >

                {
                    !formik.values[name] ?

                    <>
                        {
                            props.isVideo ? 
                            <>
                                <FaVideo size={60} className="mb-2" color={theme.colors.textSecondary}
                                ></FaVideo>
                                <br></br>
                                Añádir video
                            </>

                            :
                            <>
                                <FaCamera size={60} className="mb-2" color={theme.colors.textSecondary}
                                ></FaCamera>
                                <br></br>
                                Añadir image
                            </>
                        }
                    </>

                    :

                    <Thumb isVideo={props.isVideo} file={formik.values[name]}></Thumb>
                }
            </label>
            <Input customref={imageRef} type="file" id={name}  onChange={(e : any) => onChange(e)} onBlur={() => formik.setFieldTouched(name)} style={{display: "None"}}  {...props}></Input>
            { formik.errors[name] && formik.touched[name] ? <TitleError>{formik.errors[name]}</TitleError> : null}
        </div>
    )
}
