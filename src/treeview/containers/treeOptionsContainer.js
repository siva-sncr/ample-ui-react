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
        if (this.props.show || this.state.show) {
            TreeOptions = <OptionWindow closeModal={this.props.closeModal} editedNode={this.state.newNode.length > 0 ? this.state.newNode : this.props.clickedNode.node.name} 
            clickedNode={this.props.clickedNode}  editNode={this.editNode}  
            handleChange={(evt) => this.setState({newNode: evt.target.value})}/>
            return (
                <div style={{ "display": this.props.show ? "Block" : "none" }} className="static-modal">
                    {TreeOptions}
                </div>
            )
        } else {
            return null;
        }
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