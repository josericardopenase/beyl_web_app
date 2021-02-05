import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom';
import { DayList } from '../Components/Common/DayList';
import { DietDay } from './Diet/DietDay';

export const Diet = (props : any) => {

    const url = useRouteMatch().path; 

    return (
        <div>

            <DayList></DayList>
            
            <Route  path={`${url}/:rutineDay`} component={DietDay}></Route>

        </div>
    )
}
