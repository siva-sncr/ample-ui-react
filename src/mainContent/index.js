import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DashBoard from '../DashBoard';
import DeviceManagement from '../DeviceManagement';


class MainContent extends Component{
    render(){
        return(
            
                    <Row>
                        <h1>HighChart</h1>
                        <Col sm="10">
                            <DashBoard />
                        </Col>
                       
                        <Col sm="10">
                        <h1>ReactBootstrapDatatable</h1>
                            <DeviceManagement />
                        </Col>
                    </Row>
                
        );
    }
}

export default MainContent;