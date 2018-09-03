import React, { Component } from 'react';
import { withRouter } from "react-router";

import Navigations from './navigation/navigations';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Sentient
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Navigations />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(Header);