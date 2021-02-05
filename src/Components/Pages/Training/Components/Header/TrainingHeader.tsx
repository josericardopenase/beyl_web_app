import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TrainingHeaderElement } from './Components/TrainingHeaderElement'

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
        
        <div className="mt-4 d-flex align-items-end">
            
            {

                routes.map((obj) => <Link to={actualPath + obj.route} key={obj.name}> <TrainingHeaderElement key={obj.name} enable={url.pathname.includes(obj.route)}>{obj.name}</TrainingHeaderElement></Link> )

            }

        </div>
    )
}
