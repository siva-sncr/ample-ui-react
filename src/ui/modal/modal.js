import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import './modal.css';
import Aux from '../../hoc/aux';
import Backdrop from '../backdrop/backdrop';

class ModalWindow extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate', this.props);
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className='static-modal' onClick={this.props.modalClosed}>
                    <Modal.Dialog  style={{opacity: this.props.show ? '1' : '0' }}>
                        <Modal.Body>
                            {this.props.children}
                        </Modal.Body>
                    </Modal.Dialog> 
                </div>
            </Aux>
        )
    }
}

export default ModalWindow;