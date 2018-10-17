import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import DeviceListTable from './deviceListTableContainer';
import DeviceFiltersComponent from '../components/deviceManagementFilterComponent';
import DeviceSummaryComponent from '../components/deviceSummaryComponent';
import DeviceActionsComponent from '../components/deviceActionsComponent';
import { Tabs, Tab,Col } from 'react-bootstrap';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import * as deviceManagementAction from '../actions';
import { groupRouteParams } from '../../../services/utilityService';
import * as deviceService from '../services/deviceService';

class DeviceManagementComponent extends Component {

  state = {
    options: deviceManagementUtility.tableOptions,
    dataObject: null,
    payload: deviceManagementUtility.payload,
    routeParams: null,
    filters: null,
    column: null
  }

  setColumnStatus(evt) {
    this.setState({
      column: { name: evt.target.name, checked: evt.target.checked }
    })
  }

  setSerial(evt) {
    console.log(evt.target.value)
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
    if (!routeParams) {
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
      <Col className="content-right" xs={12} md={12}>
        {this.state.filters ? <DeviceFiltersComponent getDeviceData={() => this.prepareCall()} getSerial={(evt) => this.setSerial(evt)} filtersData={this.state.filters} /> : null}
        <DeviceActionsComponent getEnabledColumn={(evt) => this.setColumnStatus(evt)} />
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Device List">
            <DeviceListTable setColumn={this.state.column} />
          </Tab>
          <Tab eventKey={2} title="Device Summary">
            {this.props.summary ? <DeviceSummaryComponent summaryData={this.props.summary} /> : null}
          </Tab>
        </Tabs>
      </Col>
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
