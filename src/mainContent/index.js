import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Treeview from '../treeview';
import Routes from '../routes';
import * as headerActions from '../header/actions';

class MainContent extends Component {

    componentWillMount() {
        this.unlisten = this.props.history.listen((location) => {
            this.props.onRouteChange(location.pathname)
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <Row>
                <Col className="left-col" style={(this.props.location.pathname === '/' || this.props.location.pathname === '/dashboard') ? { display: 'none' } : null} sm={3}>
                    <Treeview />
                </Col>
                <Col className="right-col" sm={(this.props.location.pathname === '/' || this.props.location.pathname === '/dashboard') ? 12 : 9}>
                    <Routes />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentRoute: state.headerData.currentRoute
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRouteChange: (route) => dispatch(headerActions.onRouteChange(route))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContent));