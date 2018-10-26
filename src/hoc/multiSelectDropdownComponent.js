import React  from 'react';
import Multiselect  from 'react-bootstrap-multiselect';

const multiSelectDropdown = (props) => {
    return <Multiselect nonSelectedText='Select' allSelectedText='Show All' maxHeight="230"  includeSelectAllOption="true" onChange={props.handleChange} ref={props.refs} data={props.data} multiple />
}

export default multiSelectDropdown;