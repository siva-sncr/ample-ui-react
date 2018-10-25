import React from 'react';
import { Modal, Button, Header, Title, Body, Footer } from 'react-bootstrap';

const ModalWindow = (props) => {
    return (
        <Modal
            {...props}
            bsSize={props.modeldata.size}
            aria-labelledby="contained-modal-title-sm"
             >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-sm">{props.modeldata.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.modeldata.content}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}
export default ModalWindow;