import React from 'react';

import classes from './input.css';

const Input = ( props ) => {
    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                {...props.elementConfig}
                onChange={props.changed} />;
            break;

        default:
            inputElement = <input
                value={props.value}
                {...props.elementConfig}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.input}>
            <label className='label label-default'>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;