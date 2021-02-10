import { Link, Route, useRouteMatch } from 'react-router-dom'
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


function ConfigMenu({name, to } : any){

    const themes = useThemes()
    const  url = useRouteMatch(to)


    return (
        <Link to={to}>
            <div className="mt-2" style={{borderRadius: 10, backgroundColor:  to  === url?.path ? themes.colors.secondary : "", padding: "0.8rem 1rem"}}>
                <Title4>{name}</Title4>
            </div>
        </Link>
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

        <div>     

            <SidebarSelector>

                <Title2><Bolder>Configuracion</Bolder></Title2>

                <div className="mt-4">
                    <ConfigMenu to={url + '/perfil'} name="Perfil"></ConfigMenu>
                    <ConfigMenu  to={url + '/clientes'} name="Gestión de clientes"></ConfigMenu>
                    <ConfigMenu to={url + '/account'} name="Configuración"></ConfigMenu>

                    <div className="mt-4 d-flex pl-3"  onClick={() => {
                        dispatch(logOut({}))
                        removeLocalToken()
                    }}>
                        
                        <FaSignOutAlt color={Themes.beylColor}></FaSignOutAlt>
                        <Title4 color={Themes.beylColor} style={{marginLeft: 10}}>Cerrar sesión</Title4>

                    </div>
                </div>
            </SidebarSelector>


            <ContainerSidebarSelector>               
                


                    <Route path={`${url}/clientes`} component={Clients}></Route>
                    <Route path={`${url}/perfil`} component={Chat}></Route>
                    <Route path={`${url}/account`} component={Chat}></Route>

            </ContainerSidebarSelector>

        </div> 

    )
}

