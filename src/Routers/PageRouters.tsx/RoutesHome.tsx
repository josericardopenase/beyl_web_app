import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route } from 'react-router-dom'
import { CreateRoutes } from '../../Components/General/Constants/Routing/CreateRoutes'
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding'
import { Article } from '../../Components/Pages/Home/Article/Article'
import { Home } from '../../Components/Pages/Home/Dashboard/Home'

export const RoutesHome = (props: any) => {

    const url = props.match.url == "/" ? "" : props.match.url

    const routes = [{
        name: "principal",
        path: "",
        component: <Home/>
    }]

    return (
        <ContainerPadding>
            
            <Switch className="m-0 p-0">

                <Route path={`${url}/`} component={Home} exact></Route>
                <Route path={`${url}/article/:id`} component={Article} exact></Route>


            </Switch>

        </ContainerPadding>
    )
}
