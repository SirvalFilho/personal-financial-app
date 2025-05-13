<template>
<div class=" flex flex-row overflow-x-hidden">
    <div class="flex-1 max-h-80 pr-5">
    <Line :data="chartData1" :options="chartOptions1" />
  </div>
  <div class="flex-1 max-h-80">
     <Bar :data="chartData2" :options="chartOptions2" />
  </div>
  </div>
</template>

<script setup>
import { Line, Bar} from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement, 
  Title,
  Tooltip,
  Legend,
  PointElement
)
function calculatePercentageChange(data) {
  const dataStart = data[0];
  const dataEnd = data[data.length - 1];
  return ((dataEnd - dataStart) / dataStart) * 100;
}

const chartData1 = {
  labels: ['Jan 1', 'Feb 1', 'Mar 1', 'Apr 1', 'May 1', 'Jun 1', 'Jul 1', 'Aug 1', 'Sep 1', 'Oct 1', 'Nov 1', 'Dec 1'],
  datasets: [
    {
      data: [100, 150, 200, 180, 220, 260, 240, 280, 260, 300, 280, 320],
      borderColor: '#1AE51A',
      backgroundColor: 'transparent',
      tension: 0,
      pointBackgroundColor: '#1AE51A', 
      pointBorderColor: '#000', 
      pointRadius: 5, 
    }
  ]
}

const chartOptions1 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      onClick: () => {},
      labels: {
        generateLabels: function(chart) {
          if (!chart || !chart.data || !chart.data.datasets || chart.data.datasets.length === 0) {
            return []; // Se o gráfico ou dados não estão disponíveis, retorna uma lista vazia
          }

          let labels = ChartJS.defaults.plugins.legend.labels.generateLabels(chart);

          const dataset = chart.data.datasets[0]; // Aqui pegamos o primeiro dataset
          if (!dataset || !dataset.data || dataset.data.length === 0) {
            return labels; // Se não houver dados no dataset, retorna os labels originais
          }

          const dataStart = dataset.data[0];
          const dataEnd = dataset.data[dataset.data.length - 1];
          const percentageChange = calculatePercentageChange(dataset.data);

          if(percentageChange > 0){
            labels[0].text = `Income +${percentageChange.toFixed(2)}% in the last year`;
          }else{
            labels[0].text = `Income -${percentageChange.toFixed(2)}% in the last 30 days`;
          }

          return labels;
        },
        boxWidth: 0,
        color: '#FFF',      
        font: {
          size: 20,            
          family: 'Arial',     
          weight: 'bold'       
        },

      },
    },
    tooltip: {
      enabled: true
    },
    tooltip: { enabled: true }
  },
  scales: {
    y: {
    ticks: {
      display: false
    },
    grid: {
      display: false, 
      drawBorder: false 
    },
    border:{
      display: false
    }
  },
  x: {
    grid: {
      display: false,
      drawBorder: false
    },
    border:{
      display: false
    },
    ticks: {
      color: '#9EB89E',        
      font: {
        size: 14,              
        weight: 'bold',       
        family: 'Montserrat'        
      },
      padding: 2            
    }
  }
}
}

const chartData2 = {
  labels: [ '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Total Balance',
      data: [2200, 3100, 4000, 3600, 4800, 5300, 6100],
      backgroundColor: '#1AE51A',
      borderRadius: 0, 
      barThickness: 30
    }
  ]
}

const chartOptions2 = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: { enabled: true }
  },
  scales: {
     y: {
    ticks: {
      display: false
    },
    grid: {
      display: false, 
      drawBorder: false 
    },
    border:{
      display: false
    }
  },
    x: {
      grid: { display: false, drawBorder: false },
      ticks: {
        color: '#9EB89E',
        font: { size: 14, weight: 'bold', family: 'Montserrat' }
      }
    }
  }
}
</script>

<style scoped>
</style>