import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const chartOptions = {
    chart: {
      id: 'basic-line',
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
          enabled: true,
          delay: 150
      },
      dynamicAnimation: {
          enabled: true,
          speed: 350
      }
  },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June'],
    },
    stroke: {
      curve: 'smooth',
    }
  };

  const chartSeries = [
    {
      name: 'Commision',
      data: [12, 19, 3, 5, 2, 3],
    },
    {
      name: 'WIthdraw Amount',
      data: [6, 8, 7, 3, 5, 2],
    },
   
  ];

  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
};

export default LineChart;
