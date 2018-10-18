import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

let columnVisiblity = deviceManagementUtility.tableOptions.tableColumns;

const selectRowProp = {
    mode: 'checkbox',
    selected: [0, 2, 4]
}

const deviceListTable = (props) => {
    if (props.updateColumn) {
        columnVisiblity.map((coulmn) => {
            if (coulmn.name == props.updateColumn.name) {
                coulmn.hidden = props.updateColumn.checked
            }
        })
    }

    const tableColumnsData = columnVisiblity.map((coulmn, index) =>
        <TableHeaderColumn key={index}
            dataField={coulmn.name}
            dataSort={ true }
            hidden={coulmn.hidden} >
            {coulmn.name}
        </TableHeaderColumn>
    );

    const getFlash = function (evt) {
        console.log(evt)
    }
    function actionsFormatter() {
        return (
            <div className="row-actions">
                <span name="edit" value="id" onClick={(evt) => getFlash(evt)}>
                    <Glyphicon glyph="pencil" />
                </span>
                <span name="ping" value="id" onClick={(evt) => getFlash(evt)}>
                    <Glyphicon glyph="sort" />
                </span>
                <span name="falsh" value="flash" onClick={(evt) => getFlash(evt)}>
                    <Glyphicon glyph="lamp" />
                </span>
            </div>);
    }

    return (
        <div className="deviceList">
            <BootstrapTable striped
                options={props.options}
                selectRow={props.selectRow}
                data={props.deviceData}
                pagination
                hover selectRow={selectRowProp}>
                <TableHeaderColumn dataField='id' isKey={true} hidden>id</TableHeaderColumn>
                {tableColumnsData}
                <TableHeaderColumn dataField="id" dataFormat={actionsFormatter}>Actions</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default deviceListTable;