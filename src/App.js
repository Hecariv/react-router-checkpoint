import React from 'react'
import {Route, Redirect, Switch} from "react-router-dom";


import Login from './components/Login'
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import TopNav from './components/TopNav'
import './App.css'


export const App = (props) => {

    return (
        <div>
            <TopNav />
            <Switch>
                <Route  path={"/login"} component={Login}/>
                <Route  path={"/signup"} component={Signup} />
                <Route  path={"/profile"} component={UserProfile} />
                <Redirect from={"/"} exact to={"/login"} />
            </Switch>


        </div>
    )
}

export default App
