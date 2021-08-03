const options = {
    responsive:true,
    maintainAspectRatio: true,
    plugins:{
      legend: {
        position: 'right',
          align: 'start',
          labels:{
            padding:10,
            usePointStyle: true,
            boxWidth:10
          }
      }
    },
    scales: {
      y:{grid:{
        drawBorder: false
      },

        ticks:{
          display:false
        }
      },
      x: {
        grid: {
         
          drawOnChartArea: false,
          
        }
      }
    },
  };

  export default options 