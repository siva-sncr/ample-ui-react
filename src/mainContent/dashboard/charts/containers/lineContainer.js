import React, { Component } from 'react'

import LineComponent from '../components/lineComponent';


class LineContainer extends Component{
    state = {
        options: {
            title: {
              text: 'HighCharts'
            },
            series: [{
              data: [1, 2, 3, 4 ,5]
            }]
        }
    }

    render(){
        return(
            <div>
                <LineComponent options={this.state.options} />
            </div>
        );
    }
}

export default LineContainer;