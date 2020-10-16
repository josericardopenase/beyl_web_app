import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { FaHome, FaFire, FaComment} from 'react-icons/fa'
import { Route } from 'react-router-dom'
import { Header } from '../Components/General/Constants/Header/Header'
import { CreateRoutes } from '../Components/General/Constants/Routing/CreateRoutes'
import { Sidebar } from '../Components/General/Constants/Sidebar/Sidebar'
import { SidebarPrincipal } from '../Components/General/Constants/Sidebar/SidebarPrincipal'
import { ContainerSidebar } from '../Components/General/Containers/ContainerSidebar'
import { Home } from '../Components/Pages/Home/Dashboard/Home'
import { RoutesHome } from './PageRouters.tsx/RoutesHome'

export const Routes = () => {


    return (
        <div>

                {/* Header upside right */}
                <Header/>

                {/* Principal sidebar of navigation */}
                <SidebarPrincipal/>
                

                {/* Container for the sidebar */}
                <ContainerSidebar>

                    <Switch className="m-0 p-0">

                        <Route path="/" component={RoutesHome}></Route>

                    </Switch>

                </ContainerSidebar>


        </div>
    )
}
