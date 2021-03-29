import React from 'react'
import useThemes from '../../../../CustomHooks/useThemes'
import { Title3 } from '../../../General/Constants/Text/Title3'
import Themes from '../../../General/Styles/Themes';

interface IProps{
    isPublic : boolean,
    setIsPublic :  any,
    name : string
}

interface IElementProps{
    name : string,
    onClick ?: any,
    isActive : boolean
}


function Element({name, onClick, isActive} : IElementProps){

    const theme = useThemes();

    return (
        <div className="mr-3 pl-5 pr-5" onClick={onClick} style={{
            backgroundColor: isActive ? theme.colors.secondary : Themes.transparencyBeylColor, 
            borderRadius: "40rem", 
            padding: 10, 
            cursor: "pointer"
            }}>
            <Title3>{name}</Title3>
        </div>
    )
}


export default function PublicSelector({isPublic, setIsPublic, name} : IProps) {
    return (

        <div className="mt-4 mb-2 d-flex">

            <Element name="Todos" isActive={!isPublic} onClick={() => setIsPublic(true)}></Element>
            <Element name={"Tus " + name} isActive={isPublic} onClick={() => setIsPublic(false)}></Element>

        </div>

    )
}
