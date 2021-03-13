import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Icon } from '../../../../../General/Constants/Icons/Icon'


interface IProps{
    puntuation : number,
    size ?: number,
}

export default function ExcersisePuntuation({puntuation, size} : IProps) {
    return (
        <div className="d-flex mt-3">
            {
                [0,1,2,3,4].map((value, index) =>  (
                        <Icon color={index >= puntuation ? "grey" : "#ff4567"}>
                            <FaFire size={size ? size : 20}></FaFire>
                        </Icon>    
                ))
            }
        </div>
    )
}
