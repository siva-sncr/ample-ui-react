import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const navigationItem = (props) => (
    <NavItem
        componentClass={Link}
        to={props.link}
        href={props.link}
        exact={props.exact}
    >{props.children}
    </NavItem>
);

export default navigationItem;