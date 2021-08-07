import React from "react";
import { Line } from 'react-chartjs-2';
import options from './ChartOptions.js'
import dataHandler from './ChartDataHandler.js'

function Chart(props) {
  
//chartSection.current.getBoundingClientRect().height
//style={{height:props.parentReference.current.getBoundingClientRect().height+"px"}}
if(props.json === undefined){
  return (<h1>Load the data please.</h1>)
}else{

  try{
  const data = dataHandler(props.json)
  return (
    
    
    <Line data={data} options={options}  />
    
  )}
catch(e){
  console.error("ERROR: Please type a valid query")
  return(<h1>Query Error</h1>)
}
}

  
}


export default Chart;



