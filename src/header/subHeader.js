import React, { Component } from 'react';
import { Navbar, Nav, NavItem,MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const SubHeader = (props) => {
    function getSubmenu(node){
        node = node.split("/");
        let menus = [{name:"Home", link:"home"},{name:"Map", link:"map"}]
        return menus;
    }
    let menuItems =  getSubmenu(props.node);
    let menus = menuItems.map((menu, index) => (
        <li key={index}>
            <Link to={menu.link} >{menu.name}</Link>
        </li>
    ));
    return (
    <div className="navbar navbar-inverse sub-navigation" role="navigation">      
        <div className="container padding-0">
            <div className="">
                <div className="row">
                  <div className="col-xs-12 col-md-12 sub-menu-wrapper padding-0">
                        <ul className="dashboard-subnav nav navbar-nav">
                            {menus}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default SubHeader;