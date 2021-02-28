import React from 'react'
import useThemes from '../../../../CustomHooks/useThemes'

export default function SeparationBar() {

    const theme = useThemes()

    return (
        <hr style={{backgroundColor: theme.colors.tertiary}}></hr>
    )
}
