import React from 'react';
import MultiSelectComponent from '../../../hoc/multiSelectDropdownComponent';
import { Panel, Row, Col, FormGroup, Button, FormControl } from 'react-bootstrap';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';

const DeviceFiltersComponent = (props) => {

    let filters = {
        statuses: [],
        commTypes: [],
        deviceType: [],
        fwUpgradeStatus: [],
        networkGroupNames: [],
        profileStatus: [],
        softwareVersions: [],
        state: []
    };

    Object.keys(filters).map(function (filter, index) {
        props.filtersData[filter].map((item) => {
            filters[filter].push({ value: item })
        })
    });

    const setFilter = (evt, type) => {
        let options = evt[0].parentElement.options;
        let selectedOptions = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i].value);
            }
        }
        deviceManagementUtility.payload[type] = selectedOptions;
    }

    return (
        <Panel>
            <Row className="show-grid">
                <Col xs={11} md={11}>
                    <Row>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    Device Status
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'statuses')} data={filters.statuses} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    Device Type
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'deviceTypes')} data={filters.deviceType} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    Serial Number
                                    </Col>
                                <Col xs={6} md={6}>
                                    <FormControl
                                        type="text"
                                        onChange={(evt) => props.getSerial(evt)}
                                    />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    Device State
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent  handleChange={(evt) => setFilter(evt, 'states')}  data={filters.state} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    Profile Status
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent  handleChange={(evt) => setFilter(evt, 'profileStatuses')}  data={filters.profileStatus} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    FW Upgrade Status
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent  handleChange={(evt) => setFilter(evt, 'fwUpgradeStatuses')}  data={filters.fwUpgradeStatus} />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    FW Version
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent  handleChange={(evt) => setFilter(evt, 'softwareVersions')}  data={filters.softwareVersions} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    Communication Type
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'commTypes')} data={filters.commTypes} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={4} md={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col xs={6} md={6}>
                                    Network Group
                                    </Col>
                                <Col xs={6} md={6}>
                                    <MultiSelectComponent  handleChange={(evt) => setFilter(evt, 'networkGroupNames')}  data={filters.networkGroupNames} />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>

                </Col>
                <Col xs={1} md={1}>
                    <FormGroup>
                        <Button type="submit" onClick={() => props.getDeviceData()} >Apply</Button>
                    </FormGroup>
                </Col>
            </Row>
        </Panel>
    )

}

export default DeviceFiltersComponent;