import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import DeviceListTable from '../components/deviceListTableComponent';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import * as deviceManagementAction from '../actions';

class Datatable extends Component {


  state = {
    options: deviceManagementUtility.tableOptions,
    dataObject: null,
    newColumn: this.props.setColumn
  }


  componentWillReceiveProps(newProps) {
    this.setState({
      dataObject: newProps.devices
    })
  }



  render() {
    let deviceListTable = null;
    if (this.state.dataObject && this.state.dataObject.length > 0) {
      deviceListTable = <DeviceListTable updateColumn={this.props.setColumn} deviceData={this.state.dataObject} options={this.state.options} selectRow={this.state.selectRow} />
    } else {
      deviceListTable = <div>No Data available</div>
    }
    return (
      deviceListTable
    );
  }
}


const mapStateToProps = (state) => {
  return {
    routeParams: state.treeviewData.routeParams,
    tree: state.treeviewData.tree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNodeData: (params, payload) => dispatch(deviceManagementAction.buildNodeData(params, payload))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Datatable))
