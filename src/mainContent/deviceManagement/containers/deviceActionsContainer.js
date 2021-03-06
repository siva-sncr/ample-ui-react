import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, Dropdown, MenuItem, Checkbox } from 'react-bootstrap';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import AddDeviceComponent from '../components/addDeviceComponent';
import MoveDevicesComponent from '../components/moveDevicesComponent';
import ModalWindow from '../../../hoc/modelWindow';

class DeviceActionsComponent extends Component {

    state = {
        modelShow: false,
        modelOptions: {}
    };


    addDevice() {
        let deviceTypes = ["ZM1", "MM3", "MM2"];
        let deviceOptions = {
            title: 'Add Device',
            content: (<AddDeviceComponent deviceTypes={deviceTypes} />)
        };
        this.setState({ modelShow: true, modelOptions: deviceOptions });
    }

    moveDevices(type) {
        let moveOptions = {
            title: 'Move Devices',
            size: 'large',
            content: (<MoveDevicesComponent />)
        };
        this.setState({ modelShow: true, modelOptions: moveOptions });
    }

    render() {
        console.log(this.state.disable);
        let columnTitles = deviceManagementUtility.tableOptions.tableColumns;
        const selectedColumns = columnTitles.map((column) =>
            <label><input type="checkbox" name={column.name} onChange={(evt) => this.props.getEnabledColumn(evt)} defaultChecked={!column.hidden} />{column.name}</label>
        );

        let modelClose = () => this.setState({ modelShow: false });



        return (
            <ButtonToolbar className="pull-right">

                <ButtonGroup>
                    <Button onClick={() => this.addDevice()}>
                        <Glyphicon glyph="plus" />
                    </Button>
                    <Button onClick={() => this.moveDevices("move")} disabled={!this.props.devices || this.props.devices==0}>
                        <Glyphicon glyph="random" />
                    </Button>
                    <Button disabled={!this.props.devices || this.props.devices==0}>
                        <Glyphicon glyph="cog" />
                    </Button>
                    <Button disabled={!this.props.devices || this.props.devices==0}>
                        <Glyphicon glyph="save" />
                    </Button>
                    <Button disabled={!this.props.devices || this.props.devices==0}>
                        <Glyphicon glyph="trash" />
                    </Button>
                </ButtonGroup>

                <ButtonGroup className="export-button">
                    <Button disabled={!this.props.devices || this.props.devices==0}>
                        <Glyphicon glyph="share" />
                        <span class="caret"></span>
                    </Button>
                </ButtonGroup>

                <ButtonGroup >
                    <Dropdown disabled={!this.props.devices || this.props.devices==0} id="dropdown-custom-1" >
                        <Dropdown.Toggle noCaret>
                            <Glyphicon glyph="th" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-disable-autohide">
                            {selectedColumns}
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
                <ModalWindow show={this.state.modelShow} modeldata={this.state.modelOptions} onHide={modelClose} />
            </ButtonToolbar>
        );
    }
}

export default DeviceActionsComponent;