import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti/dist/types/Confetti'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Redirect, Route, useRouteMatch } from 'react-router-dom'
import apiDiet from '../../../../Api/apiDiet'
import apiTraining from '../../../../Api/apiTraining'
import useApiCallback from '../../../../CustomHooks/useApiCallback'
import { getDiet } from '../../../../Store/Diets/diet'
import { getRutine } from '../../../../Store/Rutines/rutine'
import { Athlete } from '../../../../Types/Types'
import Loading from '../../../General/Constants/Loading/Loading'
import { Title1 } from '../../../General/Constants/Text/Title1'
import { Title3 } from '../../../General/Constants/Text/Title3'
import { Article } from '../../Home/Article/Article'
import { Day } from '../Components/Common/Day'
import { DayList } from '../Components/Common/DayList'
import { DietDay } from './Diet/DietDay'
import SaveChanges from './General/SaveChanges'
import { RutineDay } from './Rutine/RutineDay'
import useWindowSize from '../../../../CustomHooks/useWindowSize'

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
        return <Loading></Loading>

    return (
        <div>
            <DayList rutine = {false}></DayList> 

            <Route  path={`${urlParams.path}/:dietDay`} component={DietDay}></Route>

            {
                diet.diet_days.length > 0 ?
                <Route path={urlParams.path}>
                    <Redirect to={`${urlParams.url}/${diet.diet_days[0]}`} />
                </Route>
                :
                null
            }

            <SaveChanges key={"save_diet"} notificationText="Cambios publicados correctamente" text="Guardar cambios realizados en la dieta" buttonText="Guardar" apiSave={apiDiet.saveDiet} ></SaveChanges> 
        </div>
    )
}
