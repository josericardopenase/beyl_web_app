import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { FaHome, FaFire, FaComment} from 'react-icons/fa'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { Header } from '../Components/General/Constants/Header/Header'
import { CreateRoutes } from '../Components/General/Constants/Routing/CreateRoutes'
import { Sidebar } from '../Components/General/Constants/Sidebar/Sidebar'
import { SidebarPrincipal } from '../Components/General/Constants/Sidebar/SidebarPrincipal'
import { ContainerSidebar } from '../Components/General/Containers/ContainerSidebar'
import NotificationComponent from '../Components/Notificaciones/Components/NotificationComponent'
import NotificationCenter from '../Components/Notificaciones/NotificationCenter'
import { Home } from '../Components/Pages/Home/Dashboard/Home'
import RoutesChat from './PageRouters.tsx/RoutesChat'
import RoutesConfig from './PageRouters.tsx/RoutesConfig'
import { RoutesHome } from './PageRouters.tsx/RoutesHome'
import RoutesTraining from './PageRouters.tsx/RoutesTraining'

export const Routes = () => {

    const location = useLocation()


    return (
        <motion.div 
            initial= {{opacity: 0, size: 0}}
                    animate={{opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{opacity: 0}}
                    
                    key={"general_routes"}
        
        >

                {/* Header upside right */}
                <Header/>

                {/* Principal sidebar of navigation */}
                <SidebarPrincipal/>
                

                {/* Container for the sidebar */}
                <ContainerSidebar>
                    <AnimatePresence exitBeforeEnter>
                        <Switch className="m-0 p-0">

                            <Route path="/home"  component={RoutesHome}></Route>
                            <Route path="/training"  component={RoutesTraining}></Route>

                            <Route path="/config" component={RoutesConfig}></Route>

{/*                             <Route path="/">
                                <motion.div exit="undefined">
                                    <Redirect to="/home" />
                                </motion.div>
                            </Route>   */}

                        </Switch>
                    </AnimatePresence>
                    <NotificationCenter></NotificationCenter>
                </ContainerSidebar>


        </motion.div>
    )
}
