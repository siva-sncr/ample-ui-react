import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const dashboardNavigationItem = (props) => {
    return (
        <NavItem
            componentClass={Link}
            to={props.link}
            href={props.link}
            exact={props.eact}
            >{props.children}
        </NavItem>
    )
}

export default dashboardNavigationItem;