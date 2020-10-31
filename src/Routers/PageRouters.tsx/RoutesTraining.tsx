import React from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding';
import Training from '../../Components/Pages/Training/Training';

export default function RoutesTraining(props : any) {

    const url = props.match.url == "/" ? "" : props.match.url;


    return (

            
        <Switch className="m-0 p-0">

            <Route path={`${url}/`} component={Training} exact></Route>

        </Switch>


    )
}
