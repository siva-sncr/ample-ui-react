import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Col, Button, Modal } from 'react-bootstrap';
import SingleSelectComponent from '../../../hoc/singleSelectDropdownComponent';

class AddDeviceComponent extends Component {
    state = {
        deviceType: '',
        deviceFields: []
    };
    render() {
        
        const deviceTypes = [{value:'--Select--'}]
        this.props.deviceTypes.map((type) => {
            deviceTypes.push({ value: type, selected:type == this.state.deviceType ? true : false})
        });
        
        const fromFields = {
            'MM3': [
                { key: 'region', type: 'select' },
                { key: 'substation', type: 'select' },
                { key: 'feeder', type: 'select' },
                { key: 'site', type: 'select' },
                { key: 'phase', type: 'select', },
                { key: 'serialNumber', type: 'input' },
                { key: 'deviceState', type: 'select' },
                { key: 'description', type: 'textarea' },
                { key: 'fieldNotes', type: 'textarea' },
                { key: 'networkProvider', type: 'select' },
                { key: 'macAddress', type: 'input' },
                { key: 'sensorIPAddress', type: 'input' },
                { key: 'sensorDNPAddress', type: 'input' },
                { key: 'dnpGenaralPort', type: 'input' },
                { key: 'softwareVersion', type: 'select' },
                { key: 'seiPartNumber', type: 'input' }
            ], "ZM1": [
                { key: 'region', type: 'select' },
                { key: 'substation', type: 'select' },
                { key: 'feeder', type: 'select' },
                { key: 'lateral', type: 'select', },
                { key: 'lateralSite', type: 'select' },
                { key: 'latitude', type: 'input', },
                { key: 'longitude', type: 'input', },
                { key: 'phase', type: 'select', },
                { key: 'serialNumber', type: 'input' },
                { key: 'deviceState', type: 'select' },
                { key: 'description', type: 'textarea' },
                { key: 'fieldNotes', type: 'textarea' },
                { key: 'networkProvider', type: 'select' },
                { key: 'macAddress', type: 'input' },
                { key: 'sensorIPAddress', type: 'input' },
                { key: 'sensorDNPAddress', type: 'input' },
                { key: 'softwareVersion', type: 'select' },
                { key: 'seiPartNumber', type: 'input' }
            ], 'UM3+': [
                { key: 'region', type: 'select' },
                { key: 'substation', type: 'select' },
                { key: 'feeder', type: 'select' },
                { key: 'site', type: 'select' },
                { key: 'conductor1Phase', type: 'select' },
                { key: 'conductor2Phase', type: 'select' },
                { key: 'conductor3Phase', type: 'select' },
                { key: 'serialNumber', type: 'input' },
                { key: 'deviceState', type: 'select' },
                { key: 'description', type: 'textarea' },
                { key: 'fieldNotes', type: 'textarea' },
                { key: 'networkProvider', type: 'select' },
                { key: 'macAddress', type: 'input' },
                { key: 'sensorIPAddress', type: 'input' },
                { key: 'sensorDNPAddress', type: 'input' },
                { key: 'dnpGenaralPort', type: 'input' },
                { key: 'softwareVersion', type: 'select' },
                { key: 'seiPartNumber', type: 'input' }
            ]
        }

       
        const setDeviceType = (evt) => {
            this.setState({ deviceType: evt[0].value, deviceFields: fromFields[evt[0].value] });
        }

        const setFieldType = () => {

        }

        const getTemplate = (field) => {
            let template;
            if (field.type == 'input') {
                template = <FormControl
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter text"
                />
            } else if (field.type == 'select') {
                template = <SingleSelectComponent single handleChange={(evt) => setFieldType(evt, 'deviceType')} data={deviceTypes} />
            } else {
                template = <FormControl componentClass="textarea" placeholder="textarea" />
            }
            return (
                <FormGroup key={field.key}>
                    <Col sm={4} xs={4}>
                        {field.key}
                    </Col>
                    <Col sm={8} xs={8}>
                        {template}
                    </Col>
                </FormGroup>
            )
        }



        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">Add Device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup key="device-type">
                            <Col sm={4} xs={4}>
                                Device Type*
                             </Col>
                            <Col sm={8} xs={8}>
                                <SingleSelectComponent label='Select College' handleChange={(evt) => setDeviceType(evt)} data={deviceTypes} />
                            </Col>
                        </FormGroup>
                        {this.state.deviceFields.map((field) => getTemplate(field))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Next</Button>
                </Modal.Footer>
            </div>
        );
    }
}

export default AddDeviceComponent;