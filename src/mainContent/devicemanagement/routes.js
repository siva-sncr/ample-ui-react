import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import DashboardComponent from '../dashboard';
import DeviceManagementComponent from '../devicemanagement/containers';
import RegionLevelComponent from '../devicemanagement/components/regionComponent';

const deviceRoutes = (
    <Switch>
        <Route exact path="/devicemanagement" component={DeviceManagementComponent}/>
        <Route exact path="/devicemanagement/:id" component={RegionLevelComponent} />
        <Route exact path="/devicemanagement/:regionId/:subId" component={DashboardComponent} />
    </Switch>
)
export default deviceRoutes;