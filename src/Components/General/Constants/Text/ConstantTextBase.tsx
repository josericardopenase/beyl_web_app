import React, { useContext } from 'react'
import ThemeContext from '../../../../Store/Themes/ThemeContext'
import Themes from '../../Styles/Themes';
import TextInterfaces from './Interfaces/TextInterfaces';

interface props{
    children: any,
    color ?: string,
    style ?: React.CSSProperties,
    className ?: string
}


export const ConstantTextBase = ({children, color, style, className} : props ) => {

    const theme = useContext(ThemeContext);

    const Base = {
        color:  color == 'primary' || color === undefined ? theme.colors.textPrimary : color == "secondary" ? theme.colors.textSecondary  : color,
        flexWrap: "wrap",
     } as React.CSSProperties 

    return (
        <div style={{...Base , ...style}} className={className}>
            {
                children
            }
        </div>
    )
}
