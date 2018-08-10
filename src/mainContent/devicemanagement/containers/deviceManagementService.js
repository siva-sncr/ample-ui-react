import React from 'react';
import { BootstrapTable, TableHeaderColumn, SizePerPageDropDown } from 'react-bootstrap-table';
import '../../node_modules/bootstrap-table/dist/bootstrap-table.min.css';


let order = 'desc';
class Datatable extends React.Component {
  constructor() {
    super();

    //Checkbox in data table
    const onSelectAll = (isSelected) => {
      if (isSelected) {
        return this.state.dataObject.map(row => row.id);
      } else {
        return [];
      }
    }
    // shorting by asc or desc
    const handleBtnClick = () => {
      if (order === 'desc') {
        this.refs.table.handleSort('asc', 'name');
        order = 'asc';
      } else {
        this.refs.table.handleSort('desc', 'name');
        order = 'desc';
      }
    }
    //json format
    this.dataObject = [
    ]
  }
  render() {
    const selectRowProp = {
      mode: 'checkbox',
      onSelectAll: this.onSelectAll
    };
    // pagination properties

    const options = {
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
        text: 'All', value: this.dataObject.length
      }]
    };
    return (
      <div>
        <BootstrapTable data={this.dataObject} striped
          options={this.options}
          selectRow={selectRowProp}
          pagination
          hover >
          <TableHeaderColumn dataField='Id' dataSort={true} isKey={true}>Id</TableHeaderColumn>
          <TableHeaderColumn dataField='SerialNumber' dataSort={true}>SerialNumber</TableHeaderColumn>
          <TableHeaderColumn dataField='Phase' dataSort={true}>Phase</TableHeaderColumn>
          <TableHeaderColumn dataField='DeviceStatus' dataSort={true}>DeviceStatus</TableHeaderColumn>
          <TableHeaderColumn dataField='DeviceState' dataSort={true}>DeviceState</TableHeaderColumn>
          <TableHeaderColumn dataField='fwVersion' dataSort={true}>fwVersion</TableHeaderColumn>
          <TableHeaderColumn dataField='CommunicationType' dataSort={true}>CommunicationType</TableHeaderColumn>
          <TableHeaderColumn dataField='NetworkGroup' dataSort={true}>NetworkGroup</TableHeaderColumn>
        </BootstrapTable></div>
    );
  }
}
export default Datatable