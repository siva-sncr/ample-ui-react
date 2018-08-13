import React from 'react';
import { withRouter } from 'react-router-dom'

import DeviceListTable from '../components/deviceListTableComponent';

class Datatable extends React.Component {

  state = {
    options: {
      paginationSize: 4,
      pageStartIndex: 0,
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      paginationTotalRenderer: this.customTotal,
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: null
      }]
    },
    dataObject: [
      {
        Id: 1,
        SerialNumber: 'RE08170009',
        Phase: "C",
        DeviceStatus: "Offline",
        DeviceState: "production",
        fwVersion: "2.4",
        CommunicationType: "MM3",
        NetworkGroup: "sgw-host8-comm1-group"
      },
      {
        Id: 2,
        SerialNumber: 'RE08170009',
        Phase: "C",
        DeviceStatus: "Offline",
        DeviceState: "production",
        fwVersion: "2.4",
        CommunicationType: "MM3",
        NetworkGroup: "sgw-host8-comm1-group"
      }
    ],
    selectRowProp: {
      mode: 'checkbox',
      onSelectAll: this.onSelectAll
    }
  }

  // //Checkbox in data table
  // onSelectAll = (isSelected) => {
  //   if (isSelected) {
  //     return this.state.dataObject.map(row => row.id);
  //   } else {
  //     return [];
  //   }
  // }
  // // shorting by asc or desc
  // handleBtnClick = () => {
  //   let order = 'desc';
  //   if (order === 'desc') {
  //     this.refs.table.handleSort('asc', 'name');
  //     order = 'asc';
  //   } else {
  //     this.refs.table.handleSort('desc', 'name');
  //     order = 'desc';
  //   }
  // }

  render() {
    return (
      <DeviceListTable options={this.state.options} selectRow={this.state.selectRow} />
    );
  }
}
export default withRouter(Datatable)