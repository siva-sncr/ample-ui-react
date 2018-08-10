import React, { Component } from 'react';

import Filter from '../components/filter';
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
                <Filter displayValue={this.displayValue} inputChangedHandler = {this.inputChangedHandler} />
                <h5>{this.state.convertedValue}</h5>
            </div>
        )
    }
}

export default SampleFilter;