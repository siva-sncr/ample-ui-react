import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import DashboardComponent from '../dashboard';
const dashRoutes = (
    <Switch>
    <Route path="/dashboard" component={DashboardComponent} />
    <Route path="/dashboard/:id" component={DashboardComponent} />
    </Switch>
    
)
export default dashRoutes;