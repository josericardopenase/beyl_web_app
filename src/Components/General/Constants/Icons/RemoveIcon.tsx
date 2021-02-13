import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Icon } from './Icon'


interface IProps{
    onClick : () => any
}

export default function RemoveIcon({onClick} : IProps) {
    return (
        <div onClick={onClick} style={{zIndex: 300, cursor: "pointer"}}>
            <Icon>
                <FaTrashAlt></FaTrashAlt>
            </Icon>
        </div>
    )
}
