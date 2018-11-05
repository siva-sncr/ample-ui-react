import React from 'react';
import { Modal, Button, Header, Title, Body, Footer } from 'react-bootstrap';

const ModalWindow = (props) => {
    return (
        <Modal
            {...props}
            bsSize={props.modeldata.size}
            aria-labelledby="contained-modal-title-sm"
             >
            {props.modeldata.content}
        </Modal>
    );

}
export default ModalWindow;