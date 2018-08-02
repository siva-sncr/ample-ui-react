import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown,MenuItem } from "react-bootstrap";
import "./header.css";

const SubHeader = props => (
  <div className="navbar navbar-inverse sub-navigation" role="navigation">      
        <div className="container padding-0">
            <div className="">
                <div className="row">
                  <div className="col-xs-12 col-md-12 sub-menu-wrapper padding-0">
                        <ul className="dashboard-subnav nav navbar-nav">
                            <li><a>Home</a></li>
                            <NavItem eventKey={2} href="#">
                                Map View
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SubHeader;