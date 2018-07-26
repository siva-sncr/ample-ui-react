import React, { Component } from 'react';

import Input from '../components/ui/inputs/input';
import Button from '../components/ui/buttons/button';
import UnitConversion from '../../filters/unitConversion';

class SampleFilter extends Component {
    state = {
        unitFilterValue: '',
        convertedValue: ''
    }

    inputChangedHandler = (evt) => {
        const unitFilterValue = evt.target.value;
        this.setState({
            unitFilterValue: unitFilterValue
        });
    }

    displayValue = () => {
        const convertedValue = UnitConversion(this.state.unitFilterValue, 'C');
        this.setState({
            convertedValue: convertedValue
        })
    }

    render () {
        return (
            <div>
                <h4>Sample Filter</h4>
                 {/* inputElement is UI component, dynamically we can use it*/}
                <Input
                    elementType='input'
                    elementConfig={{
                        type: 'number',
                        placeholder: 'Enter number to convert in Celcius'
                    }}
                    value=''
                    changed={(event) => this.inputChangedHandler(event)} />
                {/* Button is UI component, dynamically we can use it*/}
                <Button clicked={this.displayValue} >Convert</Button>
                <h5>{this.state.convertedValue}</h5>
            </div>
        )
    }
}

export default SampleFilter;