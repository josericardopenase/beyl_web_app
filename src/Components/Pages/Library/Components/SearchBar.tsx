import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import useThemes from '../../../../CustomHooks/useThemes'
import Input from '../../../General/Constants/Text/Inputs/Input'
import Themes from '../../../General/Styles/Themes'

interface IProps{

    text: any,
    setText : any,
    placeholder : string
}

export default function SearchBar({text, setText, placeholder} : IProps) {

    const theme = useThemes()

    return (
        <Input primary onChange={(e : any) =>  setText(e.target.value)} icon={<IoMdSearch color={Themes.beylColor}></IoMdSearch>} value={text} placeholder={placeholder}></Input>
    )
}
