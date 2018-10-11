import React from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, Dropdown, MenuItem,Checkbox } from 'react-bootstrap';

const DeviceActionsComponent = (props) => {
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
                {/* <Button>
                    <Glyphicon glyph="th" />
                </Button> */}
                <Dropdown id="dropdown-custom-1" >
                    <Dropdown.Toggle noCaret>
                        <Glyphicon glyph="th"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Checkbox> Region</Checkbox>
                        <Checkbox> Substation</Checkbox>
                        <Checkbox> Feeder</Checkbox>
                        <Checkbox> Lateral</Checkbox>
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default DeviceActionsComponent;