import React from "react"
import { useState } from 'react';

import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';



function CodeTextBox(props){

    const [textAreaValue,setTextAreaValue] = useState("")

    return(
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
  onChange={(editor, data, value) => {
  }}
/>
   )
}


export default CodeTextBox
