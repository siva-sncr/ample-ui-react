import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../devicemanagement.css';
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