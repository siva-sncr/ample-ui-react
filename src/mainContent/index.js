import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Treeview from '../treeview';
import Routes from '../routes';
import * as headerActions from '../header/actions';

class MainContent extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged(this.props.location);
        }
    }

    onRouteChanged(location) {
        this.props.onRouteChange(location.pathname)
    }

    render() {
        return (
            <Row style={{'margin-top': '50px'}}>
                <Col style={this.props.currentRoute === '/' ? { display: 'none' } : null} sm={3}>
                    <Treeview />
                </Col>
                <Col sm={this.props.currentRoute === '/' ? 12 : 9}>
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