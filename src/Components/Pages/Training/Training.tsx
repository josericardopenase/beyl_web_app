import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Article } from '../Home/Article/Article'
import { TrainingHeader } from './Components/Components/Header/TrainingHeader'


export default function Training(props : any) {

    const url = props.match.url == "/" ? "" : props.match.url;

    console.log(props.match)

    return (
        <div className="p-3">
            <Title1><Bolder> Jose Ricardo Pena Seco </Bolder></Title1>
            <Title3>Plan premiun</Title3>

            <TrainingHeader></TrainingHeader>

            <Route  path={`${url}/general`} component={Article} exact></Route>
            <Route  path={`${url}`} component={Article} exact>
                <Redirect to={`${url}/general`}/>
            </Route>


        </div>
    )
}
