import React from 'react';
import { ButtonToolbar,ButtonGroup,Button, Glyphicon } from 'react-bootstrap';

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
                <Button>
                    <Glyphicon glyph="th" />
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default DeviceActionsComponent;