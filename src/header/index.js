import React, { Component } from 'react';
import { withRouter } from "react-router";

import Navigations from './navigation/navigations';
import { Navbar, Nav } from 'react-bootstrap';
import '../resources/css/nav.css';

class Header extends Component {
    render() {
        return (
            <div className="navigation">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div className="header-holder">
                                <div className="logo-wrapper">
                                    <div className="logo"></div>
                                </div>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <Navigations />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(Header);