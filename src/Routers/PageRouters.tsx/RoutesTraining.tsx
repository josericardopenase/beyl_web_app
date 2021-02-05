import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import apiAthletes from '../../Api/apiAthletes';
import { SidebarSelector } from '../../Components/General/Constants/Sidebar/SidebarSelector';
import { Title1 } from '../../Components/General/Constants/Text/Title1';
import { Title2 } from '../../Components/General/Constants/Text/Title2';
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding';
import { ContainerSidebarSelector } from '../../Components/General/Containers/ContainerSidebar copy';
import { Athlete } from '../../Components/Pages/Training/Components/Sidebar/Athlete';
import Training from '../../Components/Pages/Training/Training';
import useApiCallback from '../../CustomHooks/useApiCallback';
import { loadAthletes } from '../../Store/athleltes';

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
        return <div>cargando</div>


    return (

        <div>     

            <SidebarSelector>

                <Title2>Clientes</Title2>
                {
                    athletes.list.map((obj : any) =>  <Athlete key={obj.id} obj={obj}></Athlete>)
                    
                }   

            </SidebarSelector>

            <ContainerSidebarSelector>               
                


                    <Route path={`${url}/:id`} component={Training}></Route>

            </ContainerSidebarSelector>

        </div> 

    )
}
