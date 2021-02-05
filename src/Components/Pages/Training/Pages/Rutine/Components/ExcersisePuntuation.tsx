import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Icon } from '../../../../../General/Constants/Icons/Icon'


interface IProps{
    puntuation : number
}

export default function ExcersisePuntuation({puntuation} : IProps) {
    return (
        <div className="d-flex mt-3">
            {
                [0,1,2,3,4].map((value, index) =>  (
                        <Icon color={index >= puntuation ? "grey" : "#ff4567"}>
                            <FaFire></FaFire>
                        </Icon>    
                ))
            }
        </div>
    )
}
