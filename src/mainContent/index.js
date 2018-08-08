import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DashBoard from './dashboard';
// import DeviceManagement from './devicemanagement/devicemanagement';

class MainContent extends Component {
    render() {
        return (

            <Row>
                <h1>HighChart</h1>
                <Col sm="10">
                    <DashBoard />
                </Col>

                {/* <Col sm="10">
                    <h1>DeviceManagement</h1>
                    <DeviceManagement />
                </Col> */}
            </Row>

        );
    }
}

export default MainContent;