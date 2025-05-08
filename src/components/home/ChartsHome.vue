<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js'

// Registrar os componentes necessários
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement)

function calculatePercentageChange(data) {
  const dataStart = data[0];
  const dataEnd = data[data.length - 1];
  return ((dataEnd - dataStart) / dataStart) * 100;
}
const chartData1 = {
  labels: ['Jan 1', 'Feb 1', 'Mar 1', 'Apr 1'],
  datasets: [
    {
      data: [100, 200, 150, 300],
      borderColor: '#1AE51A',
      backgroundColor: 'transparent',
      tension: 0.4,
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
            labels[0].text = `Income +${percentageChange.toFixed(2)}% in the last 30 days`;
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
        family: 'Arial'        
      },
      padding: 10              
    }
  }
}
}

const chartData2 = {
  labels: ['Jan 1', 'Feb 1', 'Mar 1', 'Apr 1'],
  datasets: [
    {
      data: [200, 200, 150, 300],
      borderColor: '#1AE51A',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointBackgroundColor: '#1AE51A', 
      pointBorderColor: '#000', 
      pointRadius: 5, 
    }
  ]
}

const chartOptions2 = {
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
            labels[0].text = `Expenses +${percentageChange.toFixed(2)}% in the last 30 days`;
          }else{
            labels[0].text = `Expenses ${percentageChange.toFixed(2)}% in the last 30 days`;
          }
           // Alterando o texto da legenda

          return labels;
        },
        boxWidth: 0,
        color: '#FFF',      
        font: {
          size: 20,            
          family: 'Arial',     
          weight: 'bold'       
        },
        usePointStyle: true,
        padding: 10
      },
    },
    
    tooltip: {
      enabled: true
    },
    tooltip: { enabled: true }
  },
  layout: {
    padding: {
      top: 10,
      bottom: 10
    }
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
        family: 'Arial'        
      },
      padding: 10              
    }
  }
}
}

const percentageChange1 = calculatePercentageChange(chartData1.datasets[0].data);
const percentageChange2 = calculatePercentageChange(chartData2.datasets[0].data);


chartData1.datasets[0].borderColor = percentageChange1 < 0 ? '#FF4C4C' : '#1AE51A';
chartData1.datasets[0].pointBackgroundColor = percentageChange1 < 0 ? '#FF4C4C' : '#1AE51A';


chartData2.datasets[0].borderColor = percentageChange2 < 0 ? '#1A9EFF'  : '#FF4C4C';
chartData2.datasets[0].pointBackgroundColor = percentageChange2 < 0 ? '#1A9EFF'  : '#FF4C4C';

</script>

<template>
  <div class=" flex flex-row overflow-x-hidden">
    <div class="flex-1 max-h-80 pr-5">
    <Line :data="chartData1" :options="chartOptions1" />
  </div>
  <div class="flex-1 max-h-80">
    <Line :data="chartData2" :options="chartOptions2" />
  </div>
  </div>
</template>

