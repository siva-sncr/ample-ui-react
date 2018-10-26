import React, {Component} from 'react';
import { FormControl } from 'react-bootstrap';

class InputTypeComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
        value: this.props.value
      }
   };
   
   render() {
      return (
        <FormControl
            type="text"
            name={this.props.name}
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={e => {this.setState({ value: e.target.value }), this.props.changeInput(e)}}
        />
      );
   }
}

export default InputTypeComponent;