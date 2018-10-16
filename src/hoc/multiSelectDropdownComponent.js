import React  from 'react';
import Multiselect  from 'react-bootstrap-multiselect';

const multiSelectDropdown = (props) => {
    return <Multiselect onChange={props.handleChange} ref={props.refs} data={props.data} multiple />
}

export default multiSelectDropdown;