import React, { Component } from 'react';

import DeviceManagementComponent from './containers/deviceManagementContainer';
import DeviceListTable from './containers/deviceListTableContainer';


class DeviceManagement extends Component{
    render(){
        return(
            <div>
                <h2>I am Device Management</h2>
                <DeviceManagementComponent />
            </div>
        );
    }
}

export default DeviceManagement;