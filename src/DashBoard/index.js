import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'HighCharts'
  },
  series: [{
    data: [1, 2, 3, 4 ,5]
  }]
}

const MyHighChart = () => <HighchartsReact
  highcharts={Highcharts}
  options={options}
/>

export default MyHighChart