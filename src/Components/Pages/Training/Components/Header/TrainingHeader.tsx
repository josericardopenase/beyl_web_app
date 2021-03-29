import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavigationHeader } from '../../../../General/Constants/Header/NavigationHeader';

export const TrainingHeader = ({actualPath} : any) => {

    const url = useLocation();

    const routes = [

        {

            name: "General",
            route : "/general"

        },
        {
            name: "Rutina",
            route: "/rutina"
        },
        {
            name: "Dieta",
            route: "/dieta"
        }

    ]


    return (
        
        <NavigationHeader routes={routes} actualPath={actualPath}></NavigationHeader>
    )
}
