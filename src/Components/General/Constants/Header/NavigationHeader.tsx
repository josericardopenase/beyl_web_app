
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { NavigationHeaderElement } from './NavHeaderElements/NavigationHeaderElements';

interface routes{
    name : string,
    route : string,
}

interface IProps{
    actualPath:  string,
    routes : routes[]
}

export const NavigationHeader = ({actualPath, routes} : IProps) => {

    const url = useLocation();



    return (
        
        <div className="mt-4 d-flex align-items-end">
            
            {

                routes.map((obj) => <Link to={actualPath + obj.route} key={obj.name}> <NavigationHeaderElement key={obj.name} enable={url.pathname.includes(obj.route)}>{obj.name}</NavigationHeaderElement></Link> )

            }

        </div>
    )
}
