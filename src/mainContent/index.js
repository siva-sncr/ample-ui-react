import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DashBoard from '../DashBoard';

class MainContent extends Component{
    render(){
        return(
            
                    <Row>
                        <h1>Maincontent</h1>
                        <Col sm="9">
                            <DashBoard />
                        </Col>
                    </Row>
                
        );
    }
}

export default MainContent;