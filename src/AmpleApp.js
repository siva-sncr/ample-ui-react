import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './header';
import Treeview from './treeview';
import MainContent from './mainContent';
import Footer from './footer';

class AmpleApp extends Component {
  render() {
    return (
        <Grid fluid="true">
            <Row><Header /></Row>
            <Row>
                <Col sm="3">
                    <Treeview />
                </Col>
                <Col sm="9">
                    <MainContent />
                </Col>
            </Row>
            <Row><Footer /></Row>
        </Grid>
    );
  }
}

export default AmpleApp;
