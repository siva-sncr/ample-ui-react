import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const optionWindow = (props) => {
    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit {props.clickedNode.node.type} : {props.clickedNode.node.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                        // validationState={this.getValidationState()}
                        >
                            <ControlLabel>{props.clickedNode.node.type} Name*</ControlLabel>
                            <FormControl
                                type="text"
                                value={props.editedNode}
                                onChange={(evt) => props.handleChange(evt)}
                            />
                            <FormControl.Feedback />
                            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                        </FormGroup>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => props.closeModal()}>Close</Button>
                    <Button bsStyle="primary" onClick={() => props.editNode()}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default optionWindow;