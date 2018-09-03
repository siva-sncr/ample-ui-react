import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../header';
import Footer from '../footer';
import MainContent from '../mainContent';
import Login from '../login';
import * as actionBuilder from "./actions";
import * as treeBuilderActions from '../treeview/actions';


class HomeComponent extends Component {

    componentDidMount() {
        this.props.onCheckSession()
    }

    componentWillReceiveProps(newProps) {
        if (newProps.loggedIn)
            this.props.onInitTree(newProps.sessionData.data);
    }

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
        loggedIn: state.loginData.loggedIn,
        sessionData: state.loginData.sessionData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckSession: () => dispatch(actionBuilder.setSession()),
        onInitTree: (data) => dispatch(treeBuilderActions.initTree(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));