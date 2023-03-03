import React from 'react'
import { Bar } from "react-chartjs-2";

export const options = {
    plugins: {
      title: {
        display: true,
        text: 'ภาพรวมการบ้านทั้งหมด',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    }
  };
  
function BarChart({chartData}) {
    return <Bar data={chartData} options={options}/>;}


export default BarChart;