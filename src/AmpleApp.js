import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './header';
import Treeview from './treeview';
import MainContent from './mainContent';
import Footer from './footer';
import ampleStore from './store';

class AmpleApp extends Component {
  render() {
    return (
        <Provider store={ampleStore}>
            <Router>
                <Grid fluid="true">
                    <Row><Col sm="12"><Header /></Col></Row>
                    <Row>
                        <Col sm="3">
                            <Treeview />
                        </Col>
                        <Col sm="9">
                            <MainContent />
                        </Col>
                    </Row>
                    <Row><Col sm="12"><Footer /></Col></Row>
                </Grid>
            </Router>
        </Provider>
    );
  }
}

export default AmpleApp;
