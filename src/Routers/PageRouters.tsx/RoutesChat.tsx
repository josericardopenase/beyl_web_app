import { Link, Route } from 'react-router-dom'
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
import {Websocket, WebsocketBuilder} from 'websocket-ts';
import { addMessage } from '../../Store/chat';
import { Bolder } from '../../Components/General/Constants/Text/Bolder';
import ContainerBox from '../../Components/General/Containers/ContainerBox';
import { Title4 } from '../../Components/General/Constants/Text/Title4';
import { Icon } from '../../Components/General/Constants/Icons/Icon';
import { FaPlus } from 'react-icons/fa';
import PlaceHolderEmail from '../../Components/General/Constants/SVGS/PlaceholderEmail';
import SvgJoinClient from '../../Components/General/Constants/SVGS/SvgJoinClient';
import { Title3 } from '../../Components/General/Constants/Text/Title3';
import useNotification from '../../CustomHooks/useNotification';
import Themes from '../../Components/General/Styles/Themes';
import SvgRegisterFinish from '../../Components/General/Constants/SVGS/SvgRegisterFinish';


export default function RoutesTraining(props : any) {

    const url = props.match.url == "/" ? "" : props.match.url;

    //===========================
    // FETCH ATHLETE DATA:
    //===========================
    const athletes = useSelector((state : any) => state.athletes);
    const notificationCenter = useNotification()

    const dispatch = useDispatch()
    const store = useStore()
    const authToken = store.getState().auth.token;
    const [ws, setWs] = useState<WebSocket>();


    useEffect(() => {
        
        dispatch(loadAthletes)

        setWs(new WebSocket(`wss://api.beylapp.com/ws/chat/?token=${authToken}`))



         

    }, [])

    const scrollDown = () => {
        const obj = document.getElementById('div');
        if(obj != null){
            obj.scrollTop = obj.scrollHeight;
        }   

    }

    const showPopUp = () => {
        notificationCenter.addPopUp({
            upperTitle : <Title2 style={{textAlign: "center", marginBottom: 50}}><Bolder>Bienvenido al nuevo<span style={{color: Themes.beylColor}}> sistema de chat</span></Bolder></Title2>,
            image : <SvgRegisterFinish></SvgRegisterFinish>,
            size: "lg",
            body: <div>
                <Title3 style={{marginTop: 50}}>
                    Ahora mismo el chat  <Bolder><span style={{color: "#d9534f"}}>no esta disponible para tus clientes</span> </Bolder>
                    puesto que requiere de una actualización de la aplicación móvil.
                    Sin embargo <Bolder><span style={{color: Themes.beylColor}}>ya puedes ir probando las carácteristicas que incorpora!</span></Bolder>
                </Title3>
            </div>
        })

    }

    useEffect(() => {
        if(ws){
            ws.onopen =  (event : Event) : void => {
                    console.log("opened");
                }
            
            ws.onmessage =
                (event : MessageEvent) => {
                    dispatch(addMessage( JSON.parse(event.data).message))
                    scrollDown()
                }


            


            dispatch(loadAthletes)

            return function cleanup() {
                if(ws)
                    ws.close()
            }
        }

        const firstTimeClients = localStorage.getItem('firstTimeChat') || 'true';

        if(firstTimeClients === "true"){
            showPopUp();
            localStorage.setItem('firstTimeChat', 'false');
        }
    }, [ws])


    if(athletes.loading || ws == null)
        return <Loading></Loading>

    return (

        <div>     

            <SidebarSelector>

                <Title2><Bolder>Clientes</Bolder></Title2>

                {
                    athletes.list.map((obj : any) =>  <Athlete userId key={obj.id} obj={obj}></Athlete>)
                    
                }   

                <Link to="/config/clientes">
                    <div className="mt-3">
                        <ContainerBox>
                            <div className="p-3 d-flex align-items-center justify-content-between">

                                <Title4 style={{marginRight: 10}}>Agrega un cliente</Title4>

                                <Icon>
                                    <FaPlus></FaPlus>
                                </Icon>
                            </div>
                        </ContainerBox>
                    </div>
                </Link>
            </SidebarSelector>


            <ContainerSidebarSelector>               
                



                    <Route exact path={`${url}/`} component={() => {
                    
                        return (

                            <div style={{width: "100%", justifyContent: "center", display : "flex", alignItems: "center", height: "99vh"}}>
                                <div className="text-center">
                                    <PlaceHolderEmail/>
                                    <Title2 style={{marginTop: 30}}>Selecciona un atleta <br/> para hablar con el</Title2>
                                </div>
                            </div>
                        )
                    
                    }}></Route>
                    <Route path={`${url}/:id`}>

                    <Chat ws = {ws}></Chat>

                    </Route>

            </ContainerSidebarSelector>

        </div> 

    )
}

