import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import DashboardNavigationItem from './dashboardNavigationItem';

class DashboardNavigations extends Component {

    render() {
        return (
            <Navbar className="dashboard-subnav sub-navigation">
                <div className="row">
                    <div className="col-xs-12 col-md-12 sub-menu-wrapper padding-0">
                        <Nav className="dashboard-subnav">
                            <DashboardNavigationItem link="/dashboard/home" exact="true">Home</DashboardNavigationItem>
                            <DashboardNavigationItem link="/dashboard/map-view">Map View</DashboardNavigationItem>
                        </Nav>
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default DashboardNavigations;

