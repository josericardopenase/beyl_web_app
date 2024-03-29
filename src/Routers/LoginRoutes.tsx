import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import Login from '../Components/Pages/Login/Login'
import RecoverPassword from '../Components/Pages/Login/RecoverPassword'
import PerformRecoverPassword from '../Components/Pages/Login/PerformRecoverPassword'
import Register from '../Components/Pages/Login/Register'
import VerifyEmail from '../Components/Pages/Login/VerifyEmail'

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

                    <Route path="/verify_email/:token" component={VerifyEmail}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/recover_password/:token" component={PerformRecoverPassword}></Route>  
                    <Route path="/recover_password" component={RecoverPassword}></Route>  


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
