import { Link, Redirect, Route, useRouteMatch } from 'react-router-dom'
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
import { Bolder } from '../../Components/General/Constants/Text/Bolder';
import { Title4 } from '../../Components/General/Constants/Text/Title4';
import { Title3 } from '../../Components/General/Constants/Text/Title3';
import useThemes from '../../CustomHooks/useThemes';
import { FaSignOutAlt } from 'react-icons/fa';
import Themes from '../../Components/General/Styles/Themes';
import Clients from '../../Components/Pages/Configuration/Clients';
import { logOut, removeLocalToken } from '../../Store/authentication';
import Profile from '../../Components/Pages/Configuration/Profile';
import Apariencia from '../../Components/Pages/Configuration/Apariencia';
import { motion } from 'framer-motion';
import SeparationBar from '../../Components/General/Constants/GeneralPropose/SeparationBar';
import Privacidad from '../../Components/Pages/Configuration/Privacidad';
import CloseSession from '../../Components/General/Constants/Button/CloseSession';


function ConfigMenu({name, to } : any){

    const themes = useThemes()
    const  url = useRouteMatch(to)
    const [highlight, setHighlight] = useState(false)


    return (
            to
            ?
            <Link to={to}>
                <div onMouseEnter={() => setHighlight(true)} onMouseLeave={() => setHighlight(false)} className="mt-2" style={{borderRadius: 10, backgroundColor:  to  === url?.path || highlight ? themes.colors.secondary : "", padding: "0.8rem 0rem", transition: "0.2s all ease"}}>
                    <Title4 style={{paddingLeft: 10}}>{name}</Title4>
                </div>
            </Link>
            :

                <div onMouseEnter={() => setHighlight(true)} onMouseLeave={() => setHighlight(false)} className="mt-2" style={{borderRadius: 10, backgroundColor:  to  === url?.path || highlight ? themes.colors.secondary : "", padding: "0.8rem 0rem", transition: "0.2s all ease"}}>
                    <Title4 style={{paddingLeft: 10}}>{name}</Title4>
                </div>
    )

}


export default function RoutesConfig(props : any) {

    const url = props.match.url == "/" ? "" : props.match.url;

    //===========================
    // FETCH ATHLETE DATA:
    //===========================

    const themes = useThemes()
    const dispatch = useDispatch()
    


    return (

        <motion.div
        
            initial= {{opacity: 0, size: 0}}
                    animate={{opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{opacity: 0}}
                    
                    key={"routes_training"}
        
        >

            <SidebarSelector>

                <Title2><Bolder>Configuracion</Bolder></Title2>

                <div className="mt-4 pl-2">
                    <ConfigMenu  to={url + '/clientes'} name="Gestión de clientes"></ConfigMenu>
                    <ConfigMenu to={url + '/perfil'} name="Perfil"></ConfigMenu>
                    <SeparationBar></SeparationBar>
                    <ConfigMenu to={url + '/apariencia'} name="Apariencia"></ConfigMenu>

                    <ConfigMenu to={url + '/privacidad'} name="Privacidad y seguridad"></ConfigMenu>

                    <SeparationBar></SeparationBar>
                    <CloseSession></CloseSession>
                </div>
            </SidebarSelector>


            <ContainerSidebarSelector>               
                
                    <Route path={`${url}/clientes`} component={Clients}></Route>
                    <Route path={`${url}/perfil`} component={Profile}></Route>
                    <Route path={`${url}/apariencia`} component={Apariencia}></Route>
                    <Route path={`${url}/privacidad`} component={Privacidad}></Route>

                    <Route path="/">
                        <Redirect to={`${url}/clientes`} />
                    </Route>

            </ContainerSidebarSelector>

        </motion.div> 

    )
}

