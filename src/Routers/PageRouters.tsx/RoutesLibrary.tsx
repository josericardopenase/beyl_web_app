import { motion } from 'framer-motion'
import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Redirect, Route } from 'react-router-dom'
import InterrogationTooltip from '../../Components/General/Constants/GeneralPropose/InterrogationTooltip'
import { NavigationHeader } from '../../Components/General/Constants/Header/NavigationHeader'
import { CreateRoutes } from '../../Components/General/Constants/Routing/CreateRoutes'
import { Bolder } from '../../Components/General/Constants/Text/Bolder'
import { Title1 } from '../../Components/General/Constants/Text/Title1'
import ContainerMarginTop from '../../Components/General/Containers/ContainerMarginTop'
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding'
import { Article } from '../../Components/Pages/Home/Article/Article'
import { Home } from '../../Components/Pages/Home/Dashboard/Home'
import ExcersisesLibrary from '../../Components/Pages/Library/ExcersisesLibrary'
import FoodLibrary from '../../Components/Pages/Library/FoodLibrary'


export const RoutesLibrary = (props: any) => {

    const url = props.match.url == "/" ? "" : props.match.url;

    const routes = [

        {
            name: "Ejercicios",
            route: "/excersises"
        },
        {
            name: "Alimentos",
            route: "/foods"
        }
    ]

    return (


        <motion.div
        
            initial= {{opacity: 0, size: 0}}
                    animate={{opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{opacity: 0}}
                    
                    key={"routes_library"}
        
        >
            <ContainerPadding>
                <ContainerMarginTop>
                

                    <div className="d-flex align-items-center">
                        <Title1 style={{marginRight: 15}}><Bolder>Tu biblioteca</Bolder></Title1>
                        <InterrogationTooltip size="24">
                            Bienvenido a tu biblioteca 👋, desde aquí podrás crear tus propios ejercicios, alimentos 🍏, y dentro de poco recetas 🍛 y entrenamientos.
                        </InterrogationTooltip>

                    </div>
                    <NavigationHeader routes={routes} actualPath={url}></NavigationHeader>


                    <Route path={`${url}/excersises`} component={ExcersisesLibrary} exact></Route>
                    <Route path={`${url}/foods`} component={FoodLibrary} exact></Route>

                    <Route path={`${url}/`}>
                        <Redirect to={`${url}/excersises`} />
                    </Route>

                </ContainerMarginTop>

            </ContainerPadding>
        </motion.div>
    )
}
