import React from 'react';
import HighchartsReact from 'highcharts-react-official'
import HighCharts from '../../../highCharts/highcharts';

const lineComponent = (props) => {
    return (
        <HighchartsReact
            highcharts={HighCharts}
            options={props.options}
        />
    )
}

export default lineComponent;