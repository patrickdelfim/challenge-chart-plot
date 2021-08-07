
import './App.css';
import Chart from './Component/Chart/Chart.js';
import CodeTextBox from './Component/Chart/CodeTextBox.js'
import { useState, useRef } from 'react';




function App() {

  const [jsonCode, setJsonCode] = useState();
  const textAreaReference = useRef("")

  function jsonHandler(element){
    try{
    const textToJsonFormater = element.replace(/\r?\n|\r/g,"").split(/(?<=\})/g)
    const textToJsonConverter = textToJsonFormater.map(elements =>  eval('('+ elements + ')'))
    setJsonCode(textToJsonConverter)
    
    }catch(e){
      setJsonCode({})
    }
  }

  return (
    

    <div className=" App d-flex  flex-column py-2">

      <div className="p-1" >
        <h1 style={{textAlign:"left", fontSize:"25px"}}>Patrick Borges Challenge</h1>
      </div> 
    
      <CodeTextBox reference = {textAreaReference} />
    
      <div className="flex-grow-1 ChartDiv" >
        <Chart json={jsonCode}  />
      </div>

      <div className="justify-content-end pt-2 pl-2" >
        <button className="btn btn-primary" onClick={()=> jsonHandler(textAreaReference.current)}>Generate Chart</button>
      </div>
    </div>
  );
}

export default App;
