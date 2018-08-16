import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import Home from './home';
import Header from './header';
import Footer from './footer';
import ampleStore from './store';
import MainContent from './mainContent';

class AmpleApp extends Component {
    render() {
        return (
            <Provider store={ampleStore}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        );
    }
}
export default AmpleApp;

