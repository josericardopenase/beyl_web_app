import React from 'react'
import { FaFrown, FaSadCry, FaSadTear } from 'react-icons/fa'
import NotFoundImg from '../../../MediaFiles/NotFoundImg.png'
import { Icon } from '../Constants/Icons/Icon'
import { Title3 } from '../Constants/Text/Title3'


interface IProps{
    message ?: string
    children ?: any,
    svg ?: any
}

export default function NotFound({message, children, svg} : IProps) {

    return (

        <div style={{width: "100%", textAlign: "center", alignItems: "center", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
{/*             <img width="40%" style={{maxWidth: "240px", opacity: "70%"}} src={NotFoundImg}></img> */}
            <div className="p-0 w-100 d-flex justify-content-center">
                {
                    svg
                }
            </div>
            <Title3 color="secondary">{!message ? "No se ha encontrado" : message }</Title3> 
            {
                children
            }
        </div>
    )

}
