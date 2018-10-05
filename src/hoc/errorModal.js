import React, { Component } from 'react';
// import { Modal } from 'react-bootstrap';

class ModalWindow extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        // console.log('[Modal] WillUpdate', this.props);
    }

    render () {
        return (
            <div className='static-modal' onClick={this.props.modalClosed}>
                {/* <Modal.Dialog  style={{"z-index": this.props.show ? '1050' : '0 !important' }}>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal.Dialog>  */}
            </div>
        )
    }
}

export default ModalWindow;