import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import DeviceListTable from './deviceListTableContainer';
import DeviceFiltersComponent from '../components/deviceManagementFilterComponent';
import { Tabs,Tab } from 'react-bootstrap';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import * as deviceManagementAction from '../actions';
import { groupRouteParams } from '../../../services/utilityService';

class DeviceManagementComponent extends Component {

  state = {
    options: deviceManagementUtility.tableOptions,
    dataObject: null,
    payload: deviceManagementUtility.payload,
    routeParams: null
  }

  componentDidMount() {
    this.prepareCall();
  }

  prepareCall = (routeParams) => {
    if(!routeParams) {
      routeParams = this.props.routeParams;
    }
    let requestParams = { 'PAGENO': 1, 'PAGESIZE': 10 };
    let params = groupRouteParams(requestParams, routeParams);
    this.props.getNodeData(params, this.state.payload)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.routeParams !== newProps.routeParams) {
      this.setState({
        routeParams: newProps.routeParams
      })
      this.prepareCall(newProps.routeParams);
    }
    if (newProps.devices && newProps.devices.length > 0) {
      this.setState({
        dataObject: newProps.devices
      })
    }
  }

  render() {
      
    return (
        <div>
          <DeviceFiltersComponent />
          <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Tab 1">
                  <DeviceListTable />
              </Tab>
              <Tab eventKey={2} title="Tab 2">
                  Tab 2 content
              </Tab>
          </Tabs>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeviceManagementComponent))
