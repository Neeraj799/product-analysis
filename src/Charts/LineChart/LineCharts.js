import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto" ;
import style from "./style.module.css";



function LineCharts({chartData, chartOptions}) {
  return (

    <div className={style.chartWrapper}>
    
    <Line data={chartData} options={chartOptions} />

    </div>

  )
}

export default LineCharts
