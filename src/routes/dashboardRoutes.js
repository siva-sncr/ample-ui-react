import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import asyncRoute from './asyncRoute';

class DashboardRoutes extends Component {
    
    render() {
        return (
            <Switch>
                <Route path='/dashboard/home' exact component={asyncRoute('dashboard/charts')} />
                <Route exact path='/dashboard' render={() => ( <Redirect to='/dashboard/home'/> )}/>
                <Route path='/dashboard/map-view' component={asyncRoute('dashboard/mapview')} />
            </Switch>
        );
    }
}

export default withRouter(DashboardRoutes);
