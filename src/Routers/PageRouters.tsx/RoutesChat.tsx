import { Route } from 'react-router-dom'
import { SidebarSelector } from '../../Components/General/Constants/Sidebar/SidebarSelector'
import { Title2 } from '../../Components/General/Constants/Text/Title2';
import { ContainerSidebarSelector } from '../../Components/General/Containers/ContainerSidebar copy'
import Chat from '../../Components/Pages/Chat/Chat';
import { Athlete } from '../../Components/Pages/Training/Components/Sidebar/Athlete';
import Training from '../../Components/Pages/Training/Training';
import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import { useDispatch, useSelector, useStore } from 'react-redux';
import apiAthletes from '../../Api/apiAthletes';
import { Title1 } from '../../Components/General/Constants/Text/Title1';
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding';

import useApiCallback from '../../CustomHooks/useApiCallback';
import { loadAthletes } from '../../Store/athleltes';
import Loading from '../../Components/General/Constants/Loading/Loading';
import {WebsocketBuilder} from 'websocket-ts';
import { addMessage } from '../../Store/chat';

export default function RoutesTraining(props : any) {

    const url = props.match.url == "/" ? "" : props.match.url;

    //===========================
    // FETCH ATHLETE DATA:
    //===========================

    const dispatch = useDispatch()
    const store = useStore()
    let ws : WebsocketBuilder | null = null;

    useEffect(() => {

        const authToken = store.getState().auth.token;

        ws = new WebsocketBuilder(`ws://127.0.0.1:8000/ws/chat/?token=${authToken}`).onOpen(
            (i, ev) => {
                console.log("opened");
            }
        ).onMessage(
            (i, ev) => {
                dispatch(addMessage( JSON.parse(ev.data)))
            }
        )

        ws.build()
        dispatch(loadAthletes)

    }, [])



    return (

        <div>     

            <SidebarSelector>

                <Title2>Clientes</Title2>

            </SidebarSelector>


            <ContainerSidebarSelector>               
                


                    <Route path={`${url}/:id`} component={Chat}></Route>

            </ContainerSidebarSelector>

        </div> 

    )
}

