import React from 'react';
import MultiSelectComponent from '../../../hoc/multiSelectDropdownComponent';
import { Panel, Row, Col, Button, FormControl } from 'react-bootstrap';
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

    let serialNumber = deviceManagementUtility.payload.serialNumber;

    Object.keys(filters).map(function (filter) {
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
    
    const setSerialNumber = (evt) => {
        deviceManagementUtility.payload.searchPattern= evt.target.value;
    }

    return (
        <Panel>
            <Row className="show-grid">
                <Col xs={11} md={11}>
                    <Row className="padding-10-0">
                        <Col xs={4} md={4} className="padding-side-10">
                            <Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                                <span className="middle-align text-left" >Device Status</span>
                            </Col>
                            <Col className="padding-0" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'statuses')} data={filters.statuses} />
                            </Col>
                        </Col>
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                Device Type
                                    </span>
                        </Col>
                            <Col className="padding-0" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'deviceTypes')} data={filters.deviceType} />
                            </Col>

                        </Col>
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                Serial Number
                            </span>
                        </Col>
                            <Col className="padding-0" xs={6} md={6}>
                                <FormControl
                                    type="text"
                                    value={serialNumber}
                                    onChange={(evt) => setSerialNumber(evt)}
                                />
                            </Col>

                        </Col>
                    </Row>

                    <Row className="padding-10-0">
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                Device State
                                    </span>
                        </Col>
                            <Col className="padding-0" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'states')} data={filters.state} />
                            </Col>

                        </Col>
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                Profile Status
                                    </span>
                        </Col>
                            <Col className="padding-0" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'profileStatuses')} data={filters.profileStatus} />
                            </Col>

                        </Col>
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                FW Upgrade Status
                                    </span>
                        </Col>
                            <Col className="padding-0" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'fwUpgradeStatuses')} data={filters.fwUpgradeStatus} />
                            </Col>

                        </Col >
                    </Row >

                    <Row className="padding-10-0">
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                FW Version
                                    </span>
                        </Col>
                            <Col className="padding-0 scrollable-multiselect-filter" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'softwareVersions')} data={filters.softwareVersions} />
                            </Col>

                        </Col>
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                Communication Type
                            </span>
                        </Col>
                            <Col className="padding-0" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'commTypes')} data={filters.commTypes} />
                            </Col>

                        </Col >
                        <Col xs={4} md={4} className="padding-side-10"><Col className="padding-0 padding-l-5 display-table height-30" xs={6} md={6}>
                            <span className="middle-align text-left" >
                                Network Group
                                    </span>
                        </Col>
                            <Col className="padding-0 scrollable-multiselect-filter" xs={6} md={6}>
                                <MultiSelectComponent handleChange={(evt) => setFilter(evt, 'networkGroupNames')} data={filters.networkGroupNames} />
                            </Col>

                        </Col >
                    </Row >

                </Col >
                <Col className="padding-0 pull-right" xs={1} md={1}>

                    <Button className="filter-apply" type="submit" onClick={() => props.getDeviceData()} >Apply</Button>

                </Col >
            </Row >
        </Panel >
    )

}

export default DeviceFiltersComponent;