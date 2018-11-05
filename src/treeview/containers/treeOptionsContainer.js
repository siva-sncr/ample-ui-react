import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../services/index';
import withErrorHandler from '../../hoc/withErrorHandler';
import * as treeBuilderActions from '../actions/index';

import OptionWindow from '../components/treeOptionsComponent';

class TreeOptions extends Component {

    state = {
        newNode: '',
        show: false
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.show) {
            this.setState({
                show: nextProps.show,
                newNode: nextProps.clickedNode.node.name
            })
        }
    }

    editNode = () => {
        this.props.onEditNode(this.state.newNode, this.props.clickedNode, this.props.routeParams);
        this.props.closeModal();
    }

    render() {
        let TreeOptions;
        TreeOptions = <OptionWindow show={this.props.show} closeModal={this.props.closeModal} editedNode={this.state.newNode.length > 0 ? this.state.newNode : this.props.clickedNode ? this.props.clickedNode.node.name: null} 
        clickedNode={this.props.clickedNode}  editNode={this.editNode}  
        handleChange={(evt) => this.setState({newNode: evt.target.value})}/>
        return (
            <div className="modal-container">
                {this.props.show ? TreeOptions : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        routeParams: state.treeviewData.routeParams,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onEditNode: (newNode, clickedNode, routeParams) => dispatch(treeBuilderActions.onEditNode(newNode, clickedNode, routeParams))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(TreeOptions, axios));