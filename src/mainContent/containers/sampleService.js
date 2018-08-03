import React, { Component } from 'react';
import axios from '../../services/index';

import Region from '../components/region';
import RegionService from '../../services/service';
import withErrorHandler from '../../hoc/withErrorHandler';

class Regions extends Component {
    state = {
        loading: true,
        regionList: []
    }

    componentDidMount() {
        RegionService()
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data.regions) {
                    fetchedOrders.push({
                        ...res.data.regions[key],
                        id: key
                    });
                }
                this.setState({loading: false, regionList: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                <h4>Sample Service:</h4>
                {this.state.regionList.map(region => (
                    <Region 
                        key={region.id}
                        name={region.name} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Regions, axios);