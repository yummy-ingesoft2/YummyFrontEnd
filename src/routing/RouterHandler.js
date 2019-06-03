import React, { Component } from 'react';
import LandingPage from '../screens/LandingPage/LandingPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import RegisterPage from '../screens/RegisterPage/RegisterPage';
import { Route } from "react-router-dom";

export default class RouterHandler extends Component {
    render(){
    return (
        <div>
            <Route path="/landing" exact component={LandingPage}/>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/register" exact component={RegisterPage}/>
        </div>
    );
  }
}
