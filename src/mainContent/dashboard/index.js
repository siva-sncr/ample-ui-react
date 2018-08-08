import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighCharts from '../../highcharts/highcharts'

const options = {
  title: {
    text: 'HighCharts'
  },
  series: [{
    data: [1, 2, 3, 4 ,5]
  }]
}

const MyHighCharts = () => <HighchartsReact
  highcharts={HighCharts}
  options={options}
/>

export default MyHighCharts