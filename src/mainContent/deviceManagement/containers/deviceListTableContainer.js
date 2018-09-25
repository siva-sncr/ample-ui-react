import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import DeviceListTable from '../components/deviceListTableComponent';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import * as deviceManagementAction from '../actions';
import { groupRouteParams } from '../../../services/utilityService';

class Datatable extends Component {

  state = {
    options: deviceManagementUtility.tableOptions,
    dataObject: null,
    payload: deviceManagementUtility.payload,
    routeParams: null
  }

  componentWillReceiveProps(newProps) {
    if (this.props.routeParams !== newProps.routeParams) {
      let requestParams = { 'PAGENO': 1, 'PAGESIZE': 10 };
      let params = groupRouteParams(requestParams, newProps.routeParams);
      this.props.getNodeData(params, this.state.payload)
      this.setState({
        routeParams: newProps.routeParams
      })     
    }
    if (newProps.devices && newProps.devices.length > 0) {
      this.setState({
        dataObject: newProps.devices
      })
    }
  }

  render() {
    let deviceListTable = null;
    if (this.state.dataObject) {
      deviceListTable = <DeviceListTable deviceData={this.state.dataObject} options={this.state.options} selectRow={this.state.selectRow} />
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
    devices: state.deviceManagementData.devices,
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
