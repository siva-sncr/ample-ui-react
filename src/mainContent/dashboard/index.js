import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import DashboardNavigations from '../../header/navigation/dashboard/dashboardNavigations';
import DashboardRoutes from '../../routes/dashboardRoutes';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div>
                    <DashboardNavigations />
                    <DashboardRoutes />
                </div>
            </Router>
        );
    }
}

export default Dashboard;