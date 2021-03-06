import React from 'react';
import { Form,FormControl, FormGroup, Col, Button, Checkbox  } from 'react-bootstrap';

const MoveDevicesComponent = (props) => {
    return (
        <div>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col  sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col  sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
}

export default MoveDevicesComponent;