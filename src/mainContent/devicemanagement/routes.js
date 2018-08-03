import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import DashboardComponent from '../dashboard';
import DeviceManagementComponent from '../devicemanagement/containers';
import RegionLevelComponent from '../devicemanagement/components/regionComponent';
const deviceRoutes = (
    <Route exact path="/amplemanage/devicemanagement" component={DeviceManagementComponent}>
        <Route  path="/amplemanage/devicemanagement/:regionId" component={RegionLevelComponent} />
        <Route exact path="/devicemanagement/:region/:sub" component={DashboardComponent} />
    </Route>
)
export default deviceRoutes;