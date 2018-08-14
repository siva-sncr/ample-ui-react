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
                <TableHeaderColumn dataField='Id' dataSort={true} isKey>Id</TableHeaderColumn>
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