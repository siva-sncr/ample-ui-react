import React, { Component } from 'react'

import LineChart from './containers/lineContainer';


class Dashboard extends Component {

    render() {
        return (
            <div>
                <h2>I am dashboard</h2>
                <LineChart />
            </div>
        );
    }
}

export default Dashboard;