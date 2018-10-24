import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, Dropdown, MenuItem, Checkbox } from 'react-bootstrap';
import * as deviceManagementUtility from '../../../utility/deviceManagementUtility';
import AddDeviceComponent from '../components/addDeviceComponent';
import MoveDevicesComponent from '../components/moveDevicesComponent';
import ModalWindow from '../../../hoc/modelWindow';
import * as deviceManagementAction from '../actions';

class DeviceActionsComponent extends Component {
    
    state = {
        modelShow: false,
        modelOptions: {}
    };

    componentDidMount(){
        this.props.setDeviceTypes();
    }

    addDevice() {
        let deviceTypes = this.props.deviceTypes;
        let deviceOptions = {
            title: 'Add Device',
            content: (<AddDeviceComponent deviceTypes={deviceTypes}/>)
        };
        this.setState({ modelShow: true, modelOptions: deviceOptions });
    }

    moveDevices(type) {
        let  moveOptions = {
            title: 'Move Devices',
            size: 'large',
            content: (<MoveDevicesComponent/>)
        };
        this.setState({ modelShow: true, modelOptions: moveOptions });
    }

    render() {
        let columnTitles = deviceManagementUtility.tableOptions.tableColumns;
        const selectedColumns = columnTitles.map((column) =>
            <label key={column.name}><input type="checkbox" name={column.name} onChange={(evt) => this.props.getEnabledColumn(evt)} defaultChecked={!column.hidden} />{column.name}</label>
        );

        let modelClose = () => this.setState({ modelShow: false });

      

        return (
            <ButtonToolbar className="pull-right">

                <ButtonGroup>
                    <Button onClick={() => this.addDevice()}>
                        <Glyphicon glyph="plus" />
                    </Button>
                    <Button onClick={() =>this.moveDevices("move")}>
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

                <ButtonGroup className="export-button">
                    <Button>
                        <Glyphicon glyph="share" />
                        <span className="caret"></span>
                    </Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Dropdown id="dropdown-custom-1" >
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

const mapDisaptchToProps = (dispatch) => {
    return {
        setDeviceTypes : () => dispatch(deviceManagementAction.setDeviceTypes())
    }
}

const mapStateTpProps = (state) => {
    return {
        deviceTypes : state.deviceManagementData.deviceTypes
    }
}
export default connect(mapStateTpProps, mapDisaptchToProps)(DeviceActionsComponent);