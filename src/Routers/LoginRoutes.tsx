import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import Login from '../Components/Pages/Login/Login'
import Register from '../Components/Pages/Login/Register'

export default function LoginRoutes() {

    const location = useLocation()

    return (
        <motion.div
        
            initial= {{opacity: 0}}
                    animate={{opacity: 1}} 
                    transition = {{duration: 0.4}}
                    exit={{opacity: 0}}
                    
                    key={"login_routes"}
        
        >
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>

                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>

{/*                      <Route path="/register" component={RoutesTraining}></Route>
                    <Route path="/recoverPassword" component={RoutesConfig}></Route>  */}
   

                     <Route path="/">
                        <motion.div exit="undefined">
                            <Redirect to="/login" />
                        </motion.div>
                    </Route>   

                </Switch>
            </AnimatePresence>
        </motion.div>
    )


}
