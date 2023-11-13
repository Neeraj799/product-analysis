import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto" ;
import style from "./style.module.css";



function BarCharts({chartData, chartOptions}) {
  return (

    <div className={style.chartWrapper}>
    
    <Bar data={chartData} options={chartOptions}/>

    </div>

  )
}

export default BarCharts
