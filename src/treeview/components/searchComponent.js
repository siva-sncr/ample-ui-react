import React from 'react';
import { Form, Button, FormGroup, FormControl } from 'react-bootstrap';

const search = (props) => (
    <Form inline>
        <FormGroup controlId="formInlineName">
            <FormControl onChange={(evt) => props.inputChangedHandler(evt)} type="text" placeholder="Search" />
            <Button disabled={!props.searchFoundCount} onClick={props.selectPrevMatch}>&lt;</Button>
            <Button disabled={!props.searchFoundCount} onClick={props.selectNextMatch}>&gt;</Button>
            <span>
                &nbsp;
              {props.searchFoundCount > 0 ? props.searchFocusIndex + 1 : 0}
                &nbsp;/&nbsp;
              {props.searchFoundCount || 0}
            </span>
        </FormGroup>
    </Form>
)

export default search;