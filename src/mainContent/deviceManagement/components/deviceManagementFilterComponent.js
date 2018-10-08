import React from 'react';
import MultiSelectComponent from '../../../hoc/multiSelectDropdownComponent';
import { Panel, Row, Col, FormGroup,Button ,FormControl } from 'react-bootstrap';

const DeviceFiltersComponent  = (props) => {
    
    let filters = {
        statuses : [],
        commTypes : [],
        deviceType : [],
        fwUpgradeStatus : [],
        networkGroupNames : [],
        profileStatus : [],
        softwareVersions : [],
        state : []
    }; 
    
    Object.keys(filters).map(function(filter, index) {
        props.filtersData[filter].map((item) => {
            filters[filter].push ({ value:item })
        })
     });
    
        
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
                                        <MultiSelectComponent data={filters.statuses} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        Device Type
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={filters.deviceType} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                         Serial Number
                                    </Col>
                                    <Col xs={6} md={6}>
                                    <FormControl
                                        type="text"
                                    />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>

                         <Row>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                         Device State
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={filters.state} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                         Profile Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={filters.profileStatus} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                         FW Upgrade Status
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={filters.fwUpgradeStatus} />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>


                         <Row>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                        FW Version
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={filters.softwareVersions} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                       Communication Type
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={filters.commTypes} />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  xs={6} md={6}>
                                         Network Group
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <MultiSelectComponent data={filters.networkGroupNames} />
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