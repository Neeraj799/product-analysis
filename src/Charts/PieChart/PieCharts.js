import React from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto" ;
import style from "./style.module.css";



function PieCharts({chartData}) {
  return (

    <div className={style.chartWrapper}>
    
    <Pie data={chartData} />

    </div>

  )
}

export default PieCharts
