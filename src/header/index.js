import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown,MenuItem } from "react-bootstrap";
import "./header.css";
class Header extends Component{
    render(){
        return(
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
							<li><a >Dash board</a></li>
							<li><a >Dash board</a></li>
							<li><a >Dash board</a></li>
							<li><a >Dash board</a></li>
							<li><a >Dash board</a></li>
						</ul>
					</div>
					<div className="settings-wrapper">
						<ul className="nav navbar-nav navbar-text-white pull-right nav-settings">
								<li className="dropdown" >
									<a href="javascript:"  role="button" aria-expanded="false">
										<span>"drop down"</span>
										<span className="glyphicon glyphicon-chevron-down"></span>
									</a>
									<ul className="dropdown-menu" role="menu" >
										<li>
											<a href="javscript:"  >menu</a>
										</li>
										
									</ul>
								</li>
								
								<li className="dropdown">
									<a href="javascript:" className="icon-button" role="button" aria-expanded="false">
									   <span className="icon-settings ion ion-ios-gear"></span>
									</a>
									<ul className="dropdown-menu dropdown-menu-right"  role="menu">
										<li><a className="a-disabled disabled" href="javascript:"  >menu 1</a></li>
									
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
        );
    }
}

export default Header;