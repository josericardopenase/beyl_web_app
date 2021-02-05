import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Icon } from '../../Icons/Icon'

interface props{
    onClick :  () => any
}

export default function CloseButton({onClick} : props) {
    return (
        <div onClick={onClick}>
            <Icon>
                <FaTimes/>
            </Icon>
        </div>
   )
}
