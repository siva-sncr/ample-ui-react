import React from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, Dropdown, MenuItem, Checkbox } from 'react-bootstrap';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';


const DeviceActionsComponent = (props) => {
    let columnTitles = deviceManagementUtility.tableOptions.tableColumns;
    const selectedColumns = columnTitles.map((column) =>
        <label><input type="checkbox" name={column.name} onChange={(evt) => handleChangeChk(evt)} defaultChecked={column.hidden} />{column.name}</label>
    );

    const handleChangeChk = function (evt) {
        console.log(evt.target.checked)
    }
    return (
        <ButtonToolbar className="pull-right">
            <ButtonGroup>
                <Button>
                    <Glyphicon glyph="plus" />
                </Button>
                <Button>
                    <Glyphicon glyph="random" />
                </Button>
                <Button>
                    <Glyphicon glyph="cog" />
                </Button>
                <Button>
                    <Glyphicon glyph="save" />
                </Button>
                <Button>
                    <Glyphicon glyph="trash" />
                </Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button>
                    <Glyphicon glyph="share" />
                    <span class="caret"></span>
                </Button>
            </ButtonGroup>

            <ButtonGroup>
                <Dropdown id="dropdown-custom-1" >
                    <Dropdown.Toggle noCaret>
                        <Glyphicon glyph="th" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                      {selectedColumns}
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default DeviceActionsComponent;