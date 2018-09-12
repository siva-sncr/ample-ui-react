import React, { Component } from 'react';

import DeviceListTable from './containers/deviceListTableContainer';
import '../../resources/css/devicemgmt.css'

class DeviceManagement extends Component{
    render(){
        return(
            <div>
                <h2>I am Device Management</h2>
                <DeviceListTable />
            </div>
        );
    }
}

export default DeviceManagement;