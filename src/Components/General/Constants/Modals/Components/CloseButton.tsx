import React from 'react'
import { VscClose } from 'react-icons/vsc'
import { Icon } from '../../Icons/Icon'

interface props{
    onClick :  () => any
}

export default function CloseButton({onClick} : props) {
    return (
        <div onClick={onClick} className="text-right" style={{cursor: "pointer"}}>
            <Icon>
                <VscClose size={30}/>
            </Icon>
        </div>
   )
}
