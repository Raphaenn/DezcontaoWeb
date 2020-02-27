import React from "react";
import {Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Home from "../pages/Home";
import Details from "../pages/Details";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/register" component={SignUp}/>
            <Route path="/home" component={Home} isPrivate/>
            <Route path="/detalhes/:id" component={Details} isPrivate/>
        </Switch>
    )
}