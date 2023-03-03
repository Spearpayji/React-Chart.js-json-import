import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const options = {
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: 'ภาพรวมการบ้านทั้งหมด',
      },
    },
    responsive: true,
    legend: {
        postion: 'right'
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    }
  };

  
function HorizontalChart({chartData}) {
    return <Bar data={chartData} options={options}/>;}


export default HorizontalChart;