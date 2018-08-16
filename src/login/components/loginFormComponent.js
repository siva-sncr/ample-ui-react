import React from 'react';
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";

const loginForm = (props) => {
    return (
        <Form horizontal >
            <h3 className="login-title">Grid Analytics System</h3>
            <FormGroup controlId="formHorizontalEmail">
                <FormControl
                    type="input"
                    name="j_username"
                    value={props.username}
                    onChange={(evt) => props.changeUsername(evt)}
                    placeholder="Username" />
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <FormControl
                    type="password"
                    name="j_password"
                    value={props.password}
                    onChange={(evt) => props.changePassword(evt)}
                    placeholder="Password" />
            </FormGroup>

            <FormGroup>
                <Button
                    disabled={(props.username && props.password) ? false : true}
                    block
                    bsStyle="warning"
                    onClick={(evt) => props.clicked(evt)}>
                    Login
                </Button>
            </FormGroup>

            <Button bsStyle="link">Forgot Password ?</Button>
        </Form>
    )
}

export default loginForm;