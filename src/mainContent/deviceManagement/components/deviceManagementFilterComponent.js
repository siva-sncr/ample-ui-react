import { React } from 'react';
import { Multiselect } from 'react-bootstrap-multiselect';

const multiSelect = (props) => {
    return <Multiselect onChange={props.handleChange} ref={props.refs} data={props.myData} multiple />
}

export default multiSelect;