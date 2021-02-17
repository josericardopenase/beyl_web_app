import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeProvider from './Store/Themes/ThemeProvider';
import ThemeContext from './Store/Themes/ThemeContext';
import { Title1 } from './Components/General/Constants/Text/Title1';
import { FaBeer } from 'react-icons/fa';
import { FaHome, FaFire, FaComment} from "react-icons/fa";
import { Icon } from './Components/General/Constants/Icons/Icon';
import { BeylIcon } from './Components/General/Constants/Icons/BeylIcon';
import { Sidebar } from './Components/General/Constants/Sidebar/Sidebar';
import { ContainerPadding } from './Components/General/Containers/ContainerPadding';

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

function App() {
  
  const theme = useContext(ThemeContext)

  //set body backgroundColor to the theme primary color
  document.body.style.backgroundColor = theme.colors.primary.toString();

  const isLogged = useSelector(( state : any) => state.auth.isLoggedIn)
  const dispatch = useDispatch()


  useEffect(() => {
    const token = getLocalToken()

    console.log(token)

    if(token) {
      dispatch(setToken({token : token}))
      dispatch(getProfile())
    }

  })

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
