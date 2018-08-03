import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import DashboardComponent from '../dashboard';
import DeviceManagementComponent from '../devicemanagement/containers';
import RegionLevelComponent from '../devicemanagement/components/regionComponent';

const deviceRoutes = (
    <div>
        <Route exact path="/amplemanage/devicemanagement" component={DeviceManagementComponent} />
        <Route exact path="/amplemanage/devicemanagement/:regionId" component={RegionLevelComponent} />
        <Route exact path="/amplemanage/devicemanagement/:regionId/:subId" component={DashboardComponent} />
    </div>
    
)
export default deviceRoutes;