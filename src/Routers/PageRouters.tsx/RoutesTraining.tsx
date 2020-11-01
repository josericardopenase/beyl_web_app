import React from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import { SidebarSelector } from '../../Components/General/Constants/Sidebar/SidebarSelector';
import { Title1 } from '../../Components/General/Constants/Text/Title1';
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding';
import { ContainerSidebarSelector } from '../../Components/General/Containers/ContainerSidebar copy';
import { Athlete } from '../../Components/Pages/Training/Components/Sidebar/Athlete';
import Training from '../../Components/Pages/Training/Training';

export default function RoutesTraining(props : any) {

    const url = props.match.url == "/" ? "" : props.match.url;


    return (

        <div>     

            <SidebarSelector>

                <Athlete name="Jose Ricardo Pena" image="hadf" active={true}></Athlete>
                <Athlete name="Daniel Hernandez Santana" image="hadf" active={false}></Athlete>

            </SidebarSelector>


            <ContainerSidebarSelector>               
                


                    <Route path={`${url}/:id`} component={Training}></Route>



            </ContainerSidebarSelector>

        </div> 

    )
}
