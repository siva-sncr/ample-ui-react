import React from 'react';
import { BootstrapTable, TableHeaderColumn, SizePerPageDropDown } from 'react-bootstrap-table';
//import '../../../../node_modules/bootstrap-table/dist/'
//'../../../node_modules/bootstrap-table/dist/bootstrap-table.min.css';

const deviceListTable = (props) => {
    return (
        <div>
            <BootstrapTable striped
                options={props.options}
                selectRow={props.selectRow}
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
    )
}

export default deviceListTable;