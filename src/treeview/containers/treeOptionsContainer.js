import React, { Component } from 'react';
import OptionWindow from '../components/treeOptionsComponent';

class TreeOptions extends Component {
    render() {
        return (
            <div style={{"display": this.props.show ? "Block" : "none"}} className="static-modal">
                <OptionWindow />
            </div>
        )
    }
}

export default TreeOptions;