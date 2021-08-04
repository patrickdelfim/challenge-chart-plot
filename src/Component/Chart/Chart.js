import React from "react";
import { Line } from 'react-chartjs-2';
import options from './ChartOptions.js'
import dataHandler from './ChartDataHandler.js'

function Chart(props) {
  


if(props.json === undefined){
  return (<h1>Data loading...</h1>)
}else{

  try{
  const data = dataHandler(props.json)
  return (
    

    <Line data={data} options={options} />
    
  )}
catch(e){
  console.error("Something went wrong!")
  return(<h1>Query Error</h1>)
}
}

  
}


export default Chart;



