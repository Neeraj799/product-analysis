import React, { useState } from 'react'
import Header from '../Header/Header'
import BarCharts from "../Charts/BarChart/BarCharts"
import { performanceData, storageData } from "../Data/Data"

import style from './style.module.css'
import LineCharts from '../Charts/LineChart/LineCharts'
import PieCharts from '../Charts/PieChart/PieCharts'

import NotificationList from '../NotificationList/NotificationList'

function Home() {
  const [userData, setUserData] = useState({
    labels:["January","February","March","April","May","June","July"],
    datasets: [
      {
        label: 'Featured',
        data: [43, 20, 39, 46, 86, 66, 80],
        backgroundColor: ["violet"],
        borderColor: "violet",
        borderWidth: 2,
        tension:0.4,
        pointRadius: 0,
      },

      {
        label: 'Latest Hits',
        data: [88,70,79,56,50,55,72],
        backgroundColor: ["blue"],
        borderColor: "blue",
        borderWidth: 2,
        tension:0.4,
        pointRadius: 0,

      },

      {
        label: 'Popular Hits',
        data: [32,47,38,21,55,75,70],
        backgroundColor: ["red"],
        borderColor: "red",
        borderWidth: 2,
        tension:0.4,
        pointRadius: 0,

      },



    ]
  });

  const options = {
    scales: {
      x: [
        {
          stacked: true,
          ticks: {
            color: 'white',
          },

          title: {
            display: true,
            text: 'Y-Axis Heading', // Your desired heading text
            color: 'red', // Color of the heading text
            font: {
              size: 16, // Font size of the heading text
            },
        },
      },
      ],
      y: [
        {
          stacked: true,
          ticks: {
            color: 'green', // Change the color of the x-axis labels
          },
        },
      ],
    },
    elements: {
      point: {
        radius: 0, // Set point radius to 0 to remove data points
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      labels: {
        color: 'white'
      } // You can change the legend position
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    
  
  };

  const [performData, setPerformData] = useState(performanceData);
  
  
    const PerfromOptions = {
      scales: {
        x: [
          {
            ticks: {
              color: 'white',
            },
          },
        ],
        y: [
          {
            ticks: {
              color: 'green',
            },
            title: {
              display: true,
              text: 'Y-Axis Heading',
              color: 'red',
              font: {
                size: 16,
              },
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: 'white',
          },
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
    };

  const [storage, setStorage] = useState({
  labels:["available","system","used"],
  datasets:[{
    data:[9.15,6.5,18.24]
  }]

})

    
  
  return (
    <div>
      <Header />
      <div className={style.heading}>
        <span className={style.heading1}> Welcome back,</span>
        <span className={style.heading2}> Admin </span>
      </div>
      <BarCharts chartData={performData} chartOptions={options} />

      <LineCharts chartData={userData} chartOptions={PerfromOptions} />

      <PieCharts chartData={storage} />

      <NotificationList />


      
    </div>
  )
}

export default Home
