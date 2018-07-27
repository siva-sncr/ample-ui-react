import React from 'react';

import Input from '../../ui/inputs/input';
import Button from '../../ui/buttons/button';
import Aux from '../../hoc/aux';

const filter = (props) => {
    return (
        <Aux>
            {/* inputElement is UI component, dynamically we can use it */}
            <Input
                elementType='input'
                elementConfig={{
                    type: 'number',
                    placeholder: 'Enter number to convert in Celcius'
                }}
                value=''
                changed={(event) => props.inputChangedHandler(event)} 
            />
            {/* Button is UI component, dynamically we can use it*/}
            <Button clicked={props.displayValue} >Convert</Button>
        </Aux>
    )
}

export default filter;