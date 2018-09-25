import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const deviceListTable = (props) => {
    return (
        <div>
            <BootstrapTable striped
                options={props.options}
                selectRow={props.selectRow}
                data={props.deviceData}
                pagination
                hover >
                <TableHeaderColumn dataField='serialNumber' isKey={true}>SerialNumber</TableHeaderColumn>
                <TableHeaderColumn dataField='phase' dataSort={true}>Phase</TableHeaderColumn>
                <TableHeaderColumn dataField='deviceStatus' dataSort={true}>DeviceStatus</TableHeaderColumn>
                <TableHeaderColumn dataField='deviceState' dataSort={true}>DeviceState</TableHeaderColumn>
                <TableHeaderColumn dataField='fwVersion' dataSort={true}>fwVersion</TableHeaderColumn>
                <TableHeaderColumn dataField='communicationType' dataSort={true}>CommunicationType</TableHeaderColumn>
                <TableHeaderColumn dataField='networkGroup' dataSort={true}>NetworkGroup</TableHeaderColumn>
            </BootstrapTable></div>
    )
}

export default deviceListTable;