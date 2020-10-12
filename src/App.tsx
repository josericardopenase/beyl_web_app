import React, { useContext } from 'react';
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
import { Home } from './Components/Pages/Home/Home';
import { Header } from './Components/General/Constants/Header/Header';

function App() {
  
  const theme = useContext(ThemeContext)
  

  //set body backgroundColor to the theme primary color
  document.body.style.backgroundColor = theme.colors.primary.toString();

  return (

    <div>

        <Sidebar

            construction = {[

              {
                url: '/',
                icon: <FaHome/>,
                name: 'home'
              },
              {
                url: '/clients',
                icon: <FaFire/>,
                name: 'fire'
              },
              {
                url: '/chats',
                icon: <FaComment/>,
                name: 'chats'
              },


            ]}


        />

        <ContainerPadding>

            <Header></Header>

            <Home></Home>

            <div onClick={() => theme.toggle()} style={{backgroundColor: 'white'} as React.CSSProperties}>

              cambiar tema
              
            </div>

        </ContainerPadding>
        

    </div>

  );
}

export default App;
