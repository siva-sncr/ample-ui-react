import React from 'react';
import { Switch,Route } from 'react-router-dom';
import DashboardComponent from '../dashboard/containers';
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