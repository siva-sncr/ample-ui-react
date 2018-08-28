import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const dashboardNavigationItem = (props) => {
    console.log(props);
    return (
        <NavItem>
            <NavLink
                to={props.link}
                exact={props.exact}
            >{props.children}</NavLink>
        </NavItem>
    )
}

export default dashboardNavigationItem;