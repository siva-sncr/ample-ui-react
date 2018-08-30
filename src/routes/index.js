import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import dashboard from '../mainContent/dashboard';
import asyncRoute from './asyncRoute';


class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path="/reports" component={asyncRoute('reports')} />
                <Route path="/line-monitoring" component={asyncRoute('lineMonitoring')} />
                <Route path="/device-management" component={asyncRoute('deviceManagement')} />
                <Route path="/dashboard" component={dashboard} />
                <Route exact path='/amplemanage' render={() => (<Redirect to='/dashboard' />)} />
                <Route exact path='/' render={() => (<Redirect to='/dashboard' />)} />
            </Switch>
        );
    }
}

export default Routes;
