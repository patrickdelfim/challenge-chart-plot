import React from "react"
import {useRef, useState, useEffect } from 'react';

import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';



function CodeTextBox(props){
    const [textAreaValue,setTextAreaValue] = useState("")
    const targetRef = useRef();
    const [mouseY,setMouseY] = useState()
    const [resize,setResize] = useState(false)

    useEffect(()=>{
      window.addEventListener('mouseup',()=>setResize(false))
    
      return () => {
        window.removeEventListener('mouseup',()=>setResize(false))
      }
    },[])

    useEffect(
      () => {
        const update = (e) => {
          setMouseY(e.y)
        }

        // if resize btn pressed resize codeMirror container
        if(resize){
          let actualSize = mouseY-60
          const codeMirrorMaxHeight = window.innerHeight /2
          const codeMirrorMinHeight = window.innerHeight /9

          // Only resize if it is between threshold
          if(actualSize > codeMirrorMinHeight && actualSize< codeMirrorMaxHeight){
          targetRef.current.children[0].children[0].style.height = actualSize+"px"
          }
          
        }
       
        window.addEventListener('mousemove', update)
        
        return () => {
          window.removeEventListener('mousemove', update)
        }
      },
      [mouseY,resize]
    )

    return(
      
    <div ref={targetRef} >
          
    <CodeMirror 
    value={textAreaValue}
    options={{
    
    mode: 'javascript',
    theme: 'dracula',
    lineNumbers: true,
    lineWrapping: true
  }}
  
  onBeforeChange={(editor, data, value) => {

    
    setTextAreaValue(value);
    props.reference.current = value
  }}
  
/>


<button className="resizableBtn" onMouseDown={()=>setResize(true)} >===</button>
</div>

   )
}


export default CodeTextBox
