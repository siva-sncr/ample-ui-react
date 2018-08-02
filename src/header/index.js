import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown,MenuItem } from "react-bootstrap";
import "./header.css";
import  SubHeader  from './subHeader';
import { LinkContainer } from 'react-router-bootstrap';
class Header extends Component{
    
      componentWillReceiveProps(nextProps) {
        console.log(this.props.match.path);
      }
      
    render(){
        return(
        <div>
            <div className="navigation">
                <div className="navbar navbar-inverse" role="navigation">
                    <div className="container padding-0">
                        <div className="">
                            <div className="header-holder">
                                <div className="logo-wrapper">
                                    <div className="logo"></div>
                                </div>
                                <div className="menu-wrapper">
                                    <ul className="nav navbar-nav">
                                        <LinkContainer to="/login">
                                            <NavItem eventKey={1}>login</NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/amplemanage/">
                                            <NavItem eventKey={1}>Home</NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="dashboard">
                                            <NavItem eventKey={2} href="#">Dashboard</NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="devicemanagement">
                                            <NavItem eventKey={2} href="#">Device Management</NavItem>
                                        </LinkContainer>
                                        <NavItem eventKey={2} href="#">
                                            Line Monitoring
                                        </NavItem>
                                        <NavItem eventKey={2} href="#">
                                            Reports
                                        </NavItem>
                                    </ul>
                                </div>
                                <div className="settings-wrapper">
                                    <ul className="nav navbar-nav navbar-text-white pull-right nav-settings">
                                            
                                             <NavDropdown eventKey={3} title="Current Jobs" id="basic-nav-dropdown">
                                                <MenuItem eventKey={3.1}>Device Configuration</MenuItem>
                                                <MenuItem eventKey={3.2}>Firm Ware Upgrade</MenuItem>
                                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                            </NavDropdown>

                                            <li className="dropdown user-menu" >
                                                <a href="javascript:" draggable="false" className="icon-button"  role="button" >
                                                    <span href="javascript:" className="ion ion-ios-person" ></span>
                                                    <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-right" role="menu" >
                                                    <li><a href="javascript:" className="menu-item"  >menuqq</a></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown user-menu" >
                                                <a href="javascript:" draggable="false" className="icon-button"  role="button" >
                                                    <span href="javascript:" className="ion ion-ios-person" ></span>
                                                    <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-right" role="menu" >
                                                    <li><a href="javascript:" className="menu-item"  >menuqq</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <SubHeader />

        </div>
        );
    }
}

export default Header;