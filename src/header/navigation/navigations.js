import React, { Component } from 'react';

import NavigationItem from './navigationItem';

class NavigationItems extends Component {

    render() {
        return (
            <ul className="dashboard-subnav nav navbar-nav">
                <NavigationItem link="/" exact>Dashboard</NavigationItem>
                <NavigationItem link="/device-management">Device Management</NavigationItem>
                <NavigationItem link="/line-monitoring">Line Monitoring</NavigationItem>
                <NavigationItem link="/reports">Reports</NavigationItem>
            </ul>
        )
    }
}

export default NavigationItems;