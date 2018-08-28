import React, { Component } from 'react';
import { Link } from "react-router-dom";

class DeviceManagementComponent extends Component{
    render(){
        return(
            <div>
                <h2 className="devicemanagement">Device Management Component Content</h2>

                <ul>
                    <li>
                        <Link to='/devicemanagement/region'>Navigate to region level</Link>
                    </li>
                    
                </ul>
            </div>
        );
    }
}

export default DeviceManagementComponent;