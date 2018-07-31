import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighCharts from '../highCharts/highcharts'

const options = {
  title: {
    text: 'HighCharts'
  },
  series: [{
    data: [1, 2, 3, 4 ,5]
  }]
}

const MyHighChart = () => <HighchartsReact
  highcharts={HighCharts}
  options={options}
/>

export default MyHighChart