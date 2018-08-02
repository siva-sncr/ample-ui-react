
import DeviceManagementComponent from '../devicemanagement';
import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';

const deviceManagementRoutes = (
    <Route exact path={`${this.props.match.path}/devicemanagement`} component={DeviceManagementComponent}>
      <Route path={`${this.props.match.path}/devicemanagement/region`} component={DeviceManagementComponent} />
    </Route>
  )
   
  export default deviceManagementRoutes