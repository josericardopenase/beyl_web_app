import React, { useContext } from 'react'
import ThemeContext from '../../../Store/Themes/ThemeContext'
import PropsInterfaces from '../Interfaces/PropsInterface';


export default function ContainerBox({children} : PropsInterfaces.IOnlyChildren) {

    const themes = useContext(ThemeContext);

    const style : React.CSSProperties = {
        backgroundColor: themes.colors.secondary,
        padding: 10,
        borderRadius: "20px",
        wordBreak: "break-all",
        
    }

    return (
        <div style={style}>
            {
                children
            }
        </div>
    )
}
