import React from "react";
import { Line } from 'react-chartjs-2';
import options from './chartOptions.js'
import dataHandler from './chartDataHandler.js'

function Chart(props) {
  


if(props.json === undefined){
  return (<h1>"Load the data please..."</h1>)
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



