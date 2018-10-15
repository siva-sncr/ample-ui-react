import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';

let columnVisiblity = deviceManagementUtility.tableOptions.tableColumns;

const selectRowProp = {
    mode: 'checkbox',
    selected: [0, 2, 4]
}

const deviceListTable = (props) => {

    const tableColumnsData = columnVisiblity.map((coulmn, index) =>
        <TableHeaderColumn key={index}
            dataField={coulmn.name}
            hidden={coulmn.hidden} >
            {coulmn.name}
        </TableHeaderColumn>
    );

    return (
        <div>
            <BootstrapTable striped
                options={props.options}
                selectRow={props.selectRow}
                data={props.deviceData}
                pagination
                hover selectRow={selectRowProp}>
                <TableHeaderColumn dataField='id' isKey={true} hidden>id</TableHeaderColumn>
                {tableColumnsData}
            </BootstrapTable>
        </div>
    )
}

export default deviceListTable;