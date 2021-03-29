import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { FaHome, FaFire, FaComment, FaTelegramPlane} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, useLocation } from 'react-router-dom'
import ButtonMain from '../Components/General/Constants/Button/ButtonMain'
import { Header } from '../Components/General/Constants/Header/Header'
import { CreateRoutes } from '../Components/General/Constants/Routing/CreateRoutes'
import { Sidebar } from '../Components/General/Constants/Sidebar/Sidebar'
import { SidebarPrincipal } from '../Components/General/Constants/Sidebar/SidebarPrincipal'
import { Bolder } from '../Components/General/Constants/Text/Bolder'
import { Title2 } from '../Components/General/Constants/Text/Title2'
import { Title4 } from '../Components/General/Constants/Text/Title4'
import { ContainerSidebar } from '../Components/General/Containers/ContainerSidebar'
import Themes from '../Components/General/Styles/Themes'
import NotificationComponent from '../Components/Notificaciones/Components/NotificationComponent'
import PopUpCenter from '../Components/Notificaciones/Components/PopUpCenter'
import NotificationCenter from '../Components/Notificaciones/NotificationCenter'
import { Home } from '../Components/Pages/Home/Dashboard/Home'
import useNotification from '../CustomHooks/useNotification'
import RoutesChat from './PageRouters.tsx/RoutesChat'
import RoutesConfig from './PageRouters.tsx/RoutesConfig'
import { RoutesHome } from './PageRouters.tsx/RoutesHome'
import { RoutesLibrary} from './PageRouters.tsx/RoutesLibrary'
import RoutesTraining from './PageRouters.tsx/RoutesTraining'
import BeylBetaLogo from '../Components/General/Constants/SVGS/BeylBetaLogo'

export const Routes = () => {

    const location = useLocation()
    const notificationCenter = useNotification()
    const user = useSelector((state : any) => state.auth.user)


    useEffect(() => {

        if(user){
            notificationCenter.pushNotification({
                    type: "success",
                    message: `Bienvenido de nuevo ${user.user.first_name}` 

            }) 

            const firstTime = localStorage.getItem('firstTime') || 'true';

            if(firstTime === 'true'){

                notificationCenter.addPopUp({
                    title : <Title2 style={{textAlign: "center"}}><Bolder>Bienvenido a la <span style={{color: Themes.beylColor}}>beta de beyl</span></Bolder></Title2>,
                    image : <BeylBetaLogo></BeylBetaLogo>,
                    body: <div style={{textAlign: "center"}}>
                            <Title4 style={{marginTop: 20}}>¡{user.user.first_name}! necesitamos tu ayuda, nos gustaria invitarte a que te unieras a nuestro grupo de telegram para "Founders" y asi que nos puedas dar feedback.</Title4>
                            <a target="blank" className="w-100 m-0 p-0 d-flex justify-content-center" href={"http://t.me/joinchat/IJEwQVrG3AVyw8R9"}>
                                <ButtonMain icon={<FaTelegramPlane size={25}/>} style={{maxWidth: 300, width: "100%", borderRadius: "100px", textAlign: "center", marginTop: "30px", backgroundColor: "#0088CC"}}>Unirme al grupo</ButtonMain>
                            </a>
                        </div>
                })

                localStorage.setItem('firstTime', 'false')

            }
        }
    }, [])


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
                            <Route path="/library" component={RoutesLibrary}></Route>

                            <Route path="/">
                                <motion.div exit="undefined">
                                    <Redirect to="/home" />
                                </motion.div>
                            </Route>  

                        </Switch>
                    </AnimatePresence>
                    <NotificationCenter></NotificationCenter>
                    <PopUpCenter></PopUpCenter>
                </ContainerSidebar>


        </motion.div>
    )
}
