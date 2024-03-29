import { Route } from 'react-router-dom'
import { SidebarSelector } from '../../Components/General/Constants/Sidebar/SidebarSelector'
import { Title2 } from '../../Components/General/Constants/Text/Title2';
import { ContainerSidebarSelector } from '../../Components/General/Containers/ContainerSidebar copy'
import Chat from '../../Components/Pages/Chat/Chat';
import { Athlete } from '../../Components/Pages/Training/Components/Sidebar/Athlete';
import Training from '../../Components/Pages/Training/Training';
import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import { useDispatch, useSelector } from 'react-redux';
import apiAthletes from '../../Api/apiAthletes';
import { Title1 } from '../../Components/General/Constants/Text/Title1';
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding';

import useApiCallback from '../../CustomHooks/useApiCallback';
import { loadAthletes } from '../../Store/athleltes';
import Loading from '../../Components/General/Constants/Loading/Loading';

export default function RoutesTraining(props : any) {

    const url = props.match.url == "/" ? "" : props.match.url;

    //===========================
    // FETCH ATHLETE DATA:
    //===========================

    const dispatch = useDispatch()
    const athletes = useSelector((state : any) => state.athletes);


    useEffect(() => {

        dispatch(loadAthletes)

    }, [])


    if(athletes.loading)
        return <Loading></Loading>


    return (

        <div>     

            <SidebarSelector>

                <Title2>Clientes</Title2>
                {
                    athletes.list.map((obj : any) =>  <Athlete key={obj.id} obj={obj}></Athlete>)
                    
                }   

            </SidebarSelector>


            <ContainerSidebarSelector>               
                


                    <Route path={`${url}/:id`} component={Chat}></Route>

            </ContainerSidebarSelector>

        </div> 

    )
}

