import React from 'react';
import { Form,FormControl, FormGroup, Col, Button, Checkbox  } from 'react-bootstrap';
import SingleSelectComponent from '../../../hoc/singleSelectDropdownComponent';

const AddDeviceComponent = (props) => {
    console.log(props.deviceTypes);
    let addDevice = {
        deviceTypes: [{ value: 'MM3' },{ value: 'ZM1' },{ value: 'UM3+' }]
    };

    const setDeviceType = (evt, type) => {
        console.log(evt);
    }


    return (
        <div>
            <Form horizontal>
                <FormGroup>
                    <Col sm={4} xs={4}>
                        Device Type*
                    </Col>
                    <Col sm={8} xs={8}>
                        <SingleSelectComponent label='Select College' handleChange={(evt) => setDeviceType(evt, 'deviceType')} data={addDevice.deviceTypes} />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col sm={4} xs={4}>
                        Device Type*
                    </Col>
                    <Col sm={8} xs={8}>
                        <SingleSelectComponent label='Select College' handleChange={(evt) => setDeviceType(evt, 'deviceType')} data={addDevice.deviceTypes} />
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddDeviceComponent;