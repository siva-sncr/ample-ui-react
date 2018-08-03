import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../devicemanagement.css';
class RegionLevelComponent extends Component{
    render(){
        return(
            <div>
                <h2 className="devicemanagement">Device Management Component Content Region Level Component</h2>

                <ul>
                    <li>
                        <Link to='/amplemanage/devicemanagement/region/sub'>Navigate to sub level</Link>
                    </li>
                    
                </ul>
            </div>
        );
    }
}

export default RegionLevelComponent;