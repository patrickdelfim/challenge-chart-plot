
import './App.css';
import Chart from './files/Chart/Chart';


import { useState } from 'react';


function App() {

  const [jsonCode, setJsonCode] = useState();
  const [textAreaValue,setTextAreaValue] = useState()

  function jsonHandler(element){

    try{
    const textToJsonFormater = element.replace(/\r?\n|\r/g,"").split(/(?<=\})/g)
    const textToJsonConverter = textToJsonFormater.map(elements =>  eval('('+ elements + ')'))
    setJsonCode(textToJsonConverter)
    }catch(e){
      console.error("ERROR: Please type a valid query")
    }
  }

  return (
    <div className="App">

        <div>
          <h1 style={{textAlign:"left", fontSize:"25px"}}>Patrick Borges Challenge</h1>
        </div>

      <textarea onChange={(e)=> setTextAreaValue(e.target.value)} style={{width:"95%",resize: "none",height: window.innerHeight/3}}>

      </textarea>
      
     
      <Chart json={jsonCode}/>
      
      
    <div style={{padding:10}}>
      <button style={{marginRight:"100%",width:100}} onClick={()=> jsonHandler(textAreaValue)}>Generate Chart</button>
    </div>
    </div>
  );
}

export default App;
