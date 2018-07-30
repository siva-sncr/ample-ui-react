import React from 'react';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import Aux from '../../hoc/aux';

const filter = (props) => {
    return (
        <Aux>
            <Form inline>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Enter a number to convert into Celcius: </ControlLabel>
                    <FormControl onChange={props.inputChangedHandler} type="number" placeholder="Enter number" />      
                </FormGroup>
                <Button onClick={props.displayValue}>Convert</Button>
            </Form>
        </Aux>
    )
}

export default filter;