import React, { Component } from 'react';
import '../../resources/css/devicemgmt.css';
import DeviceManagementComponent from './containers/deviceManagementContainer';


class DeviceManagement extends Component {
    render() {
        return (
            <div className="device-management">
                <DeviceManagementComponent />
            </div>
        );
    }
}

export default DeviceManagement;