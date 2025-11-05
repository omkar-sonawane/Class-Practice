
import { useState } from 'react';
import './App.css'

function App(props) {

  const [num,setNum] = useState(props.initNum)
  
  const increase = ()=>{
    const n = num + 1
    setNum(n)
  }
  const decrease = ()=>{
    const n = num - 1
    setNum(n)
  }

  return (
   <div>
    <button onClick={increase}>+</button> 
      <h1>{num}</h1>
    <button onClick={decrease}>-</button>
   </div>
  );
}

export default App
