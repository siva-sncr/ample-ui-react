import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const navigationItem = ( props ) => (
    <NavItem>
        <NavLink 
            to={props.link}
            exact={props.exact}
            >{props.children}</NavLink>
    </NavItem>
);

export default navigationItem;