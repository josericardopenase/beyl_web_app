import { motion } from 'framer-motion'
import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route } from 'react-router-dom'
import { CreateRoutes } from '../../Components/General/Constants/Routing/CreateRoutes'
import { ContainerPadding } from '../../Components/General/Containers/ContainerPadding'
import { Article } from '../../Components/Pages/Home/Article/Article'
import { Home } from '../../Components/Pages/Home/Dashboard/Home'

export const RoutesHome = (props: any) => {

    const url = props.match.url == "/" ? "" : props.match.url;

    return (


        <motion.div
        
            initial= {{opacity: 0, size: 0}}
                    animate={{opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{opacity: 0}}
                    
                    key={"routes_home"}
        
        >
            <ContainerPadding>
                

                
                    <Route path={`${url}/`} component={Home} exact></Route>
                    <Route path={`${url}/article/:id`} component={Article} exact></Route>



            </ContainerPadding>
        </motion.div>
    )
}
