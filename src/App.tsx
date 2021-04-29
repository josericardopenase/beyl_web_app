import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeProvider from './Store/Themes/ThemeProvider';
import ThemeContext from './Store/Themes/ThemeContext';
import { Title1 } from './Components/General/Constants/Text/Title1';
import { FaBeer, FaCheck, FaCheckCircle, FaDesktop, FaEnvelope, FaInstagram, FaMailBulk, FaMailchimp, FaMobile, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';
import { FaHome, FaFire, FaComment} from "react-icons/fa";
import { Icon } from './Components/General/Constants/Icons/Icon';
import { BeylIcon } from './Components/General/Constants/Icons/BeylIcon';
import { Sidebar } from './Components/General/Constants/Sidebar/Sidebar';
import { ContainerPadding } from './Components/General/Containers/ContainerPadding';
import 'react-image-lightbox/style.css';
import { Header } from './Components/General/Constants/Header/Header';
import {  BrowserRouter, Router } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Dashboard/Home';
import { ContainerSidebar } from './Components/General/Containers/ContainerSidebar';
import { Routes } from './Routers/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { loadAthletes } from './Store/athleltes';
import { getLocalToken, getProfile, setToken } from './Store/authentication';
import LoginRoutes from './Routers/LoginRoutes';
import { AnimatePresence } from 'framer-motion';
import useWindowSize from './CustomHooks/useWindowSize';
import { Title4 } from './Components/General/Constants/Text/Title4';
import GoDesktopPlaceholder from './Components/General/Constants/SVGS/GoDesktopPlaceholder';
import { Title3 } from './Components/General/Constants/Text/Title3';
import { Title2 } from './Components/General/Constants/Text/Title2';
import { Bolder } from './Components/General/Constants/Text/Bolder';
import Themes from './Components/General/Styles/Themes';

function App() {
  
  const theme = useContext(ThemeContext)

  //set body backgroundColor to the theme primary color
  document.body.style.backgroundColor = theme.colors.primary.toString();

  const isLogged = useSelector(( state : any) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const size = useWindowSize();

  useEffect(() => {
    const token = getLocalToken()

    if(token) {
      dispatch(setToken({token : token}))
      dispatch(getProfile())
    }


  }, [])

  if(size.width){
    if(size.width < 768){

        return (
          <div className="p-3 text-center" style={{width: "100%"}}>
            <div className="mt-4">
              <GoDesktopPlaceholder></GoDesktopPlaceholder>
            </div>
            <Title2 style={{marginTop: 20}}><Bolder>Hola entrenador/a</Bolder></Title2>
            <Title4 color="secondary" style={{marginTop: 20}}>Para ofrecerte la mejor experiencia el Portal de Entrenadores esta diseñado para usarse <Bolder>en PC o Mac</Bolder></Title4>
            <Title3 style={{marginTop: 30}}>Entonces... <Bolder>¿Que puedo hacer?</Bolder></Title3>
            <ul className="flex-column">

                <li className="d-flex text-left mt-4">
                  <div className="p-1" style={{width: 3, height: 3, borderRadius: "50%", backgroundColor: Themes.beylColor, marginTop: 13, marginRight:  15}}></div>
                  <Title4><Bolder><span style={{color:  Themes.beylColor}}>¿Eres cliente de un entrenador? </span></Bolder>Estas perdido amigo jajaja... pero no te preocupes entra en el app store o play store, busca Beyl, descarga la app y unete a tu entrenador</Title4>
                </li>
                <li className="d-flex text-left mt-3">
                  <div className="p-1" style={{width: 3, height: 3, borderRadius: "50%", backgroundColor: Themes.beylColor, marginTop: 13, marginRight:  15}}></div>
                  <Title4 ><Bolder><span style={{color:  Themes.beylColor}}>¿Eres un entrenador?</span> </Bolder> entra en app.beylapp.com desde tu navegador favorito y ¡comienza a entrenar!</Title4>
                </li>
                <li className="d-flex text-left mt-3">
                  <div className="p-1" style={{width: 3, height: 3, borderRadius: "50%", backgroundColor: Themes.beylColor, marginTop: 13, marginRight:  15}}></div>
                  <Title4><Bolder><span style={{color:  Themes.beylColor}}>¿No eres ninguno de los dos?</span> </Bolder> eso significa que deberías de dejar el móvil e irte a entrenar pierna...</Title4>
                </li>


            </ul>

            <Title3 color={Themes.beylColor} style={{marginTop: 30}}><Bolder>Recuerda</Bolder></Title3>
            <Title4 style={{marginTop: 20}} color="secondary">La app móvil (tanto del play store, como app store) es solo para tus clientes</Title4>

            <div className="d-flex justify-content-center mt-4">
              <div className="d-flex flex-column justify-content-center text-center mr-3 position-relative" style={{width: "fit-content"}}>
                <div style={{border: `2px ${theme.colors.textSecondary} solid`, width: "fit-content", borderRadius: "50%", padding: 30}}>
                  <Icon>
                    <FaDesktop size={60} ></FaDesktop>
                  </Icon>
                </div>

                <div style={{position: "absolute", top: 0, right: 0, backgroundColor: "white", borderRadius: "50%"}}>

                    <FaCheckCircle color="green" size={30}></FaCheckCircle>

                </div>

                <Title3 style={{marginTop: 20}}><Bolder>Tú</Bolder></Title3>
              </div>

              <div className="d-flex flex-column justify-content-center text-center ml-3" style={{width: "fit-content"}}>
                <div style={{border: `2px ${theme.colors.textSecondary} solid`, width: "fit-content", borderRadius: "50%", padding: 30}}>
                  <Icon>
                    <FaMobileAlt size={60} ></FaMobileAlt>
                  </Icon>
                </div>

                <Title3 style={{marginTop: 20}}><Bolder>Tus clientes</Bolder></Title3>
              </div>
            </div>

            <div style={{backgroundColor: theme.colors.secondary, borderRadius: "20px"}} className="mt-5 p-3">
                <Title3><Bolder>¿Te podemos ayudar?</Bolder></Title3>
                <div className="d-flex align-items-center justify-content-center mt-5">
                  <Icon>
                    <FaWhatsapp size={25} ></FaWhatsapp>
                  </Icon>

                  <Title3 style={{marginLeft: 20}}>(+34) 628 38 77 31</Title3>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <Icon>
                    <FaEnvelope size={25} ></FaEnvelope>
                  </Icon>

                  <Title3 style={{marginLeft: 20}}>beylapp@gmail.com</Title3>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <Icon>
                    <FaInstagram size={25} ></FaInstagram>
                  </Icon>

                  <Title3 style={{marginLeft: 20}}>@beyl_fit</Title3>
                </div>
            </div>
          </div>


        )

    }
  }

  return (

  
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter >
        {
          isLogged ? 
          <Routes key={110}/>
          :
          <LoginRoutes key={120}/>

        }
          
        </AnimatePresence>
      </BrowserRouter>
  );
}

export default App;
