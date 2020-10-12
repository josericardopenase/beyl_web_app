import React, { useContext } from 'react'
import { IconContext } from 'react-icons/lib'
import ThemeContext from '../../../../Store/Themes/ThemeContext'

interface props{
    children: any,
    size ?: string,
    color ?: string
}

export const Icon = ({children, size, color} : props) => {

    const theme = useContext(ThemeContext)

    return (
        <IconContext.Provider  value={{style: {fontSize: size ? size : 19, color: color == null ?  theme.colors.textSecondary : color, display: "flex", flex:"column", justifyContent: "center", textAlign: "center"}}}>
            <div>
                {
                    children
                }
            </div>
        </IconContext.Provider>
    )
}
