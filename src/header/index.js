import React, { Component } from 'react';
import { withRouter } from "react-router";

import Navigations from './navigation/navigations';
import { Navbar, Nav, NavItem, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';
import './index.css';

class Header extends Component {
    render() {
        return (
            <Navbar fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <div className="logo"></div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Navigations />
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown title="Current Jobs" className="nav-dropdown-menu">
                            <MenuItem>Device Configuration</MenuItem>
                            <MenuItem>Firmware Upgrade</MenuItem>
                        </NavDropdown>
                        <NavDropdown title={<Glyphicon glyph="cog" />} className="nav-dropdown-menu">
                            <MenuItem>System Admin</MenuItem>
                            <MenuItem>Configure Properties</MenuItem>
                            <MenuItem>Manage Profiles</MenuItem>
                            <MenuItem>User Management</MenuItem>
                            <MenuItem>About</MenuItem>
                        </NavDropdown>
                        <NavDropdown title={<Glyphicon glyph="user" />} className="nav-dropdown-menu">
                            <MenuItem>Update Profile</MenuItem>
                            <MenuItem>Change Password</MenuItem>
                            <MenuItem>Log out</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(Header);