import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './header';
import Footer from './footer';
import ampleStore from './store';
import MainContent from './mainContent';

class AmpleApp extends Component {
    render() {
        return (
            <Provider store={ampleStore}>
                <Router>
                    <Grid fluid={true}>
                        <Row><Col sm={12}><Header /></Col></Row>
                        <MainContent />
                        <Row><Col sm={12}><Footer /></Col></Row>
                    </Grid>
                </Router>
            </Provider>
        );
    }
}
export default AmpleApp;

