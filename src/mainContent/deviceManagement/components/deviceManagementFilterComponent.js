import React from 'react';
import MultiSelectComponent from '../../../hoc/multiSelectDropdownComponent';
import { Panel, Row, Col, FormGroup,Button } from 'react-bootstrap';

const DeviceFiltersComponent  = (props) => {
        let devices = [
            {value:'Offline', selected:true},
            {value:'Online'}
          ];
        return (
            <Panel>
                <Row className="show-grid">
                    <Col xs={11} md={11}>
                        <Row>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>

                         <Row>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>


                         <Row>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={devices} />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        </Col>
                        <Col xs={1} md={1}>
                        <FormGroup>
                            <Button type="submit">Apply</Button>
                        </FormGroup>
                        </Col>
                </Row>
            </Panel>  
        )
    
}

export default DeviceFiltersComponent;