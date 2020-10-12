import React, { useContext } from 'react'
import ThemeContext from '../../../../Store/Themes/ThemeContext'
import Themes from '../../Styles/Themes';
import TextInterfaces from './Interfaces/TextInterfaces';


export const ConstantTextBase = ({children, color, style} : TextInterfaces.IChildrenColorStyle ) => {

    const theme = useContext(ThemeContext);

    const Base = {
        color: color == 'primary' || color === undefined ? theme.colors.textPrimary : theme.colors.textSecondary
     } as React.CSSProperties

    return (
        <div style={{...Base , ...style}}>
            {
                children
            }
        </div>
    )
}
