import React, { useEffect, useState } from 'react'
import { Redirect, Route, useRouteMatch } from 'react-router-dom'
import apiAthletes from '../../../Api/apiAthletes'
import useApiCallback from '../../../CustomHooks/useApiCallback'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Article } from '../Home/Article/Article'
import { TrainingHeader } from './Components/Header/TrainingHeader'
import { Diet } from './Pages/Diet'
import { General } from './Pages/General'
import { Rutine } from './Pages/Rutine'
import * as types from '../../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { url } from 'inspector'
import { setSelectedAthlete } from '../../../Store/athleltes'
import Loading from '../../General/Constants/Loading/Loading'
import { AnimatePresence } from 'framer-motion'


export default function Training(props : any) {

    const urlParams = useRouteMatch<any>();
    const id = urlParams.params.id;

    const dispatch = useDispatch()
    const loading = useSelector((state : any) => state.athletes.loading)
    const storelook = useSelector((state : any) => state.athletes.list.filter((user : any) => user.id == id))
    const user = storelook[0]

    useEffect(() => {

        if(user !== undefined)
            dispatch(setSelectedAthlete(user))

    }, [id])

    if(loading)
        return <Loading></Loading>

    return (
        <AnimatePresence exitBeforeEnter>
        <div className="pl-4 pt-4">

            <Title1><Bolder>{user?.user.first_name + " " + user?.user.last_name}</Bolder></Title1>

            <TrainingHeader actualPath = {urlParams.url}></TrainingHeader>

            <div className="pt-3"> 
                <Route key={"general"}  path={`${urlParams.path}/general`} component={General} ></Route>
                <Route  key={"rutine"} path={`${urlParams.path}/rutina`} component={Rutine} ></Route>
                <Route key={"diet"} path={`${urlParams.path}/dieta`} component={Diet} ></Route>
                <Route path={`${urlParams.url}`}  component={Article}>
{/*                 <Redirect to={`${urlParams.url}/general`}/> */}
                </Route> 
            </div>

        </div>
        </AnimatePresence>
    )
}
