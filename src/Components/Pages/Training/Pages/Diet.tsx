import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Route, useRouteMatch } from 'react-router-dom'
import apiTraining from '../../../../Api/apiTraining'
import useApiCallback from '../../../../CustomHooks/useApiCallback'
import { getDiet } from '../../../../Store/Diets/diet'
import { getRutine } from '../../../../Store/Rutines/rutine'
import { Athlete } from '../../../../Types/Types'
import { Title1 } from '../../../General/Constants/Text/Title1'
import { Title3 } from '../../../General/Constants/Text/Title3'
import { Article } from '../../Home/Article/Article'
import { Day } from '../Components/Common/Day'
import { DayList } from '../Components/Common/DayList'
import { DietDay } from './Diet/DietDay'
import { RutineDay } from './Rutine/RutineDay'

export const Diet = (props: any) => {

    const urlParams = useRouteMatch();

    const dispatch = useDispatch();
    const store = useStore()

    const loading : any = useSelector((state : any ) => state.training.diet.diets.loading)
    const diet : any = useSelector((state : any ) => state.training.diet.diets.list.find((x : any) => x.id === state.athletes.selectedAthlete.trainer_diet))

    useEffect(() => {
        if(store.getState().athletes.selectedAthlete !== undefined)
            dispatch(getDiet(store.getState().athletes.selectedAthlete.trainer_diet)) 
    }, [])


    if(loading || !diet )
        return <div>loading</div>

    return (
        <div>
            <DayList rutine = {false}></DayList> 
            <Route  path={`${urlParams.path}/:dietDay`} component={DietDay}></Route>

        </div>
    )
}
