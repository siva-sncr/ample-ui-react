import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../header';
import Treeview from '../treeview';
import MainContent from '../mainContent';
import DashboardComponent from '../mainContent/dashboard';
import Footer from '../footer';
import allRoutes from '../mainContent/allRoutes';
class HomeComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
            <div>
                <Router>
                    <Grid fluid={true}>
                        <Row><Col sm={12}><Header  /></Col></Row>
                        <Row>
                            <Col sm={3}>
                                <Treeview />
                            </Col>
                            <Col sm={9}>
                                {allRoutes.dashRoutes}
                                {allRoutes.deviceRoutes}
                            </Col>
                        </Row>
                        <Row><Col sm={12}><Footer /></Col></Row>
                    </Grid>
                </Router>
            </div>
        );
    }
}

export default HomeComponent;