import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import dashboard from '../mainContent/dashboard';
import deviceManagement from '../mainContent/deviceManagement';
import lineMonitoring from '../mainContent/lineMonitoring';
import reports from '../mainContent/reports';

class Routes extends Component {
    
    render() {
        return (
            <Switch>
                <Route path="/reports" component={reports} />
                <Route path="/line-monitoring" component={lineMonitoring} />
                <Route path="/device-management" component={deviceManagement} />
                <Route path="/" exact component={dashboard} />
            </Switch>
        );
    }
}

export default Routes;
