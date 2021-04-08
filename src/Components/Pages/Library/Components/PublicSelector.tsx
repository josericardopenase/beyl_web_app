import React from 'react'
import useThemes from '../../../../CustomHooks/useThemes'
import { Title3 } from '../../../General/Constants/Text/Title3'
import Themes from '../../../General/Styles/Themes';

interface IProps{
    isPublic : boolean,
    setIsPublic :  any,
    name : string,
    fontSize ?: number
}

interface IElementProps{
    name : string,
    onClick ?: any,
    isActive : boolean,
    fontSize ?: number
}


function Element({name, onClick, isActive, fontSize} : IElementProps){

    const theme = useThemes();

    return (
        <div className="mr-3 pl-5 pr-5" onClick={onClick} style={{
            backgroundColor: isActive ? theme.colors.secondary : Themes.transparencyBeylColor, 
            borderRadius: "40rem", 
            padding: 10, 
            cursor: "pointer"
            }}>
            <h4 style={{color: theme.colors.textPrimary, fontSize: fontSize ? fontSize : "1.22222rem"}} className="m-0 p-0">{name}</h4>
        </div>
    )
}


export default function PublicSelector({isPublic, setIsPublic, name, fontSize} : IProps) {
    return (

        <div className="mt-4 mb-2 d-flex">

            <Element fontSize ={fontSize} name="Todos" isActive={!isPublic} onClick={() => setIsPublic(true)}></Element>
            <Element fontSize ={fontSize} name={"Tus " + name} isActive={isPublic} onClick={() => setIsPublic(false)}></Element>

        </div>

    )
}
