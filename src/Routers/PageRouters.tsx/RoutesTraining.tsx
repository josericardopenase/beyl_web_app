import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import apiAthletes from '../../Api/apiAthletes';
import { Icon } from '../../Components/General/Constants/Icons/Icon';
import { SidebarSelector } from '../../Components/General/Constants/Sidebar/SidebarSelector';
import { Bolder } from '../../Components/General/Constants/Text/Bolder';
import { Title1 } from '../../Components/General/Constants/Text/Title1';
import { Title2 } from '../../Components/General/Constants/Text/Title2';
import { Title3 } from '../../Components/General/Constants/Text/Title3';
import { Title4 } from '../../Components/General/Constants/Text/Title4';
import ContainerBox from '../../Components/General/Containers/ContainerBox';
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding';
import { ContainerSidebarSelector } from '../../Components/General/Containers/ContainerSidebar copy';
import { Athlete } from '../../Components/Pages/Training/Components/Sidebar/Athlete';
import Training from '../../Components/Pages/Training/Training';
import useApiCallback from '../../CustomHooks/useApiCallback';
import { loadAthletes } from '../../Store/athleltes';
import Placeholder from '../../Components/General/Constants/SVGS/Placeholder'
import { motion } from 'framer-motion';
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

        <motion.div
        
            initial= {{opacity: 0, size: 0}}
                    animate={{opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{opacity: 0}}
                    
                    key={"routes_training"}
        
        >

            <SidebarSelector>

                <Title2><Bolder>Clientes</Bolder></Title2>
                {
                    athletes.list.map((obj : any) =>  <Athlete key={obj.id} obj={obj}></Athlete>)
                    
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
                                    <Placeholder/>
                                    <Title2 style={{marginTop: 30}}>Selecciona un atleta <br/> para entrenarlo</Title2>
                                </div>
                            </div>
                        )
                    
                    }}></Route>
                    <Route path={`${url}/:id`} component={Training}></Route>

            </ContainerSidebarSelector>

</motion.div>

    )
}
