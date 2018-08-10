import React from 'react';
import { Switch,Route } from 'react-router-dom';
import DashboardComponent from '../dashboard/containers';
const dashRoutes = (
    <Switch>
        <Route path="/dashboard" component={DashboardComponent} />
        <Route path="/dashboard/:id" component={DashboardComponent} />
    </Switch>
    
)
export default dashRoutes;