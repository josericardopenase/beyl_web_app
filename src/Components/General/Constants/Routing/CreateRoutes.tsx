import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route, RouteComponentProps } from 'react-router-dom'

interface IRoute{
    name : string,
    path : string,
    component : any
}

interface props{
    routes : Array<IRoute>
}

export const CreateRoutes = ({routes} : props) => {
    return (
        <Switch className="m-0 p-0">

            {
               routes.map(obj => <Route key={obj.name} path={obj.path}>{obj.component}</Route>)
            }

        </Switch>
    )
}
