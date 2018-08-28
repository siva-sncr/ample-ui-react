import React, { Component } from 'react';

import { BrowserRouter as Router} from "react-router-dom";
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../header';
import Footer from '../footer';
import MainContent from '../mainContent';
import Login from '../login';


class HomeComponent extends Component {
    render() {
        let content = null;
        if (this.props.loggedIn) {
            content =
                <Grid fluid={true}>
                    <Row><Col sm={12}><Header /></Col></Row>
                    <MainContent />
                    <Row><Col sm={12}><Footer /></Col></Row>
                </Grid>
        } else {
            content = <Login />
        }

        return (
            <Router>
                {content}
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginData.loggedIn
    }
}
export default connect(mapStateToProps)(HomeComponent);