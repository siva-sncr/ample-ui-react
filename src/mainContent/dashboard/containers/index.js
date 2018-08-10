import React, { Component } from 'react';
import '../dashboard.css';
import WatchlistComponent from '../components/watchlist';
import dashboardActions from '../actions';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
class DashboardComponent extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
       // console.log(this.props);
        this.props.getWatchlist();
    }
    render(){
        let { watchlist } = this.props;
        return(
            <div>
              <h2 className="dashboard">Dashboard Component Content</h2>
              <WatchlistComponent data={watchlist} />
            </div>
        );
    }
}

function mapStateToDashboard(storeState){
    return {
        watchlist: storeState.dashboardData.watchlistData
    }
}

function mapDispactToDashboardProps(dispatch){
    const actions = bindActionCreators(dashboardActions, dispatch);
    return actions;

}
export default connect(mapStateToDashboard, mapDispactToDashboardProps)(DashboardComponent);