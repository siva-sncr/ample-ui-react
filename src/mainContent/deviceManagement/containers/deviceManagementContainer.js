import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import DeviceListTable from './deviceListTableContainer';
import DeviceFiltersComponent from '../components/deviceManagementFilterComponent';
import DeviceSummaryComponent from '../components/deviceSummaryComponent';
import { Tabs,Tab } from 'react-bootstrap';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import * as deviceManagementAction from '../actions';
import { groupRouteParams } from '../../../services/utilityService';
import  * as deviceService  from '../services/deviceService';

class DeviceManagementComponent extends Component {

  state = {
    options: deviceManagementUtility.tableOptions,
    dataObject: null,
    payload: deviceManagementUtility.payload,
    routeParams: null,
    filters:null
  }

  componentDidMount() {
    this.prepareCall();
   
    deviceService.getFilters('managedevices')
    .then((response) => {
      this.setState({
        filters: response.data.data
      });
    })

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
          {this.state.filters ? <DeviceFiltersComponent  filtersData={this.state.filters}/> : null}
          <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Device List">
                  <DeviceListTable />
              </Tab>
              <Tab eventKey={2} title="Device Summary">
                 {this.props.summary ? <DeviceSummaryComponent summaryData={this.props.summary} /> : null}
              </Tab>
          </Tabs>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    summary: state.deviceManagementData.devicesData.summary,
    devices: state.deviceManagementData.devicesData.devices,
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
