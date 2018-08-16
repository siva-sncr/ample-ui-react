import React, { Component } from 'react';
import "./css/header.css";
import { withRouter } from "react-router";

import Navigations from './navigation/navigations';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse sub-navigation" role="navigation">
                <div className="container padding-0">
                    <div className="">
                        <div className="row">
                            <div className="col-xs-12 col-md-12 sub-menu-wrapper padding-0">
                                <Navigations />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);