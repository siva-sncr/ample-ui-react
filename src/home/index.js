import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../header';
import Treeview from '../treeview';
import MainContent from '../mainContent';
import Footer from '../footer';

class HomeComponent extends Component{
    render(){
        return(
            <div>
                    <Grid fluid={true}>
                        <Row><Col sm={12}><Header /></Col></Row>
                        <Row>
                            <Col sm={3}>
                                <Treeview />
                            </Col>
                            <Col sm={9}>
                                <MainContent />
                            </Col>
                        </Row>
                        <Row><Col sm={12}><Footer /></Col></Row>
                    </Grid>
            </div>
        );
    }
}

export default HomeComponent;