import React from 'react';

const button = (props) => (
    <button className='button button-danger'
        onClick={props.clicked}>{props.children}</button>
);

export default button;