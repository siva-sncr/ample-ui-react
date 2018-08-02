import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../header';
import Treeview from '../treeview';
import MainContent from '../mainContent';
import DashboardComponent from '../mainContent/dashboard';
import DeviceManagementComponent from '../mainContent/devicemanagement';
import Footer from '../footer';

class HomeComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.match.path);
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
                                <Route exact path="/" component={DashboardComponent} />
                                <Route exact path={`${this.props.match.path}/dashboard`} component={DashboardComponent} />
                                <Route exact path={`${this.props.match.path}/devicemanagement`} component={DeviceManagementComponent} />
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