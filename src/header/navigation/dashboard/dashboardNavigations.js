import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import DashboardNavigationItem from './dashboardNavigationItem';

class DashboardNavigations extends Component {

    render() {
        return (
            <Navbar fluid fixedTop className="secondary-navbar">
                <Nav>
                    <DashboardNavigationItem link="/dashboard/home" exact="true">Home</DashboardNavigationItem>
                    <DashboardNavigationItem link="/dashboard/map-view">Map View</DashboardNavigationItem>
                </Nav>
            </Navbar>
        )
    }
}

export default DashboardNavigations;

