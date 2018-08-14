import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import DeviceListTable from '../components/deviceListTableComponent';
import deviceService from '../services/deviceService';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';

class Datatable extends Component {

  state = {
    options: deviceManagementUtility.tableOptions,
    dataObject: null,
    selectRowProp: {
      mode: 'checkbox',
      onSelectAll: this.onSelectAll
    }
  }

  componentWillMount() {
    let deviceList = null;
    deviceService()
      .then(response => {
        deviceList = response.data.data;
        this.setState({
          dataObject: deviceList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    let deviceListTable = null;
    if (this.state.dataObject) {
      deviceListTable = <DeviceListTable deviceData={this.state.dataObject} options={this.state.options} selectRow={this.state.selectRow} />
    } else {
      deviceListTable = <div>No Data available</div>
    }
    return (
      [ deviceListTable ]
    );
  }
}
export default withRouter(Datatable)