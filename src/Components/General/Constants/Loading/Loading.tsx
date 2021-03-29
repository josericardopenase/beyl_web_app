import React from 'react'
import { SpinnerCircular } from 'spinners-react'
import useThemes from '../../../../CustomHooks/useThemes'
import Themes from '../../Styles/Themes'

export default function Loading({size} : any) {
    const themes = useThemes()
    return (
        <div style={{width: "100%"}} className="d-flex justify-content-center p-5 align-items-center">
            <SpinnerCircular color={Themes.beylColor} secondaryColor={themes.colors.tertiary} size={size ? size : 60}  />
        </div>
    )
}
