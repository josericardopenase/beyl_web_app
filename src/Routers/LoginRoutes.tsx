import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Components/Pages/Login/Login'

export default function LoginRoutes() {



    return (
        <Switch>

            <Route path="/login" component={Login}></Route>

{/*             <Route path="/register" component={RoutesTraining}></Route>
            <Route path="/recoverPassword" component={RoutesConfig}></Route> */}

            <Route path="/">
                <Redirect to="/login" />
            </Route>

        </Switch>
    )


}