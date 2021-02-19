import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Redirect, Route, useRouteMatch } from 'react-router-dom'
import apiTraining from '../../../../Api/apiTraining'
import useApiCallback from '../../../../CustomHooks/useApiCallback'
import { getRutine } from '../../../../Store/Rutines/rutine'
import { Athlete } from '../../../../Types/Types'
import Loading from '../../../General/Constants/Loading/Loading'
import { Title1 } from '../../../General/Constants/Text/Title1'
import { Title3 } from '../../../General/Constants/Text/Title3'
import { Article } from '../../Home/Article/Article'
import { Day } from '../Components/Common/Day'
import { DayList } from '../Components/Common/DayList'
import SaveChanges from './General/SaveChanges'
import { RutineDay } from './Rutine/RutineDay'

export const Rutine = (props: any) => {


    const urlParams = useRouteMatch();
    const dispatch = useDispatch();
    const store = useStore()
    const loading : any = useSelector((state : any ) => state.training.rutine.rutines.loading)
    const rutine : any = useSelector((state : any ) => state.training.rutine.rutines.list.find((x : any) => x.id === state.athletes.selectedAthlete.trainer_rutine))

    useEffect(() => {

        if(store.getState().athletes.selectedAthlete !== undefined)
            dispatch(getRutine(store.getState().athletes.selectedAthlete.trainer_rutine)) 

    }, [])


    useEffect(() => {
        console.log("hello ")
    }, [store.getState().athletes.selectedAthlete])

    if(loading || !rutine)
        return <Loading></Loading>
    return (
        <div className="position-relative">
            <DayList rutine = {true} days={rutine.rutine_days}></DayList> 
            <Route  path={`${urlParams.path}/:rutineDay`} component={RutineDay}></Route>
            <SaveChanges key="save_rutine" notificationText="Cambios en la rutina aplicados correctamente" text="Guardar cambios de la rutina realizados" buttonText="Actualizar" apiSave={apiTraining.saveRutine} ></SaveChanges> 

        </div>
    )
}
