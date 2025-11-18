import { useState } from 'react'

import './App.css'
import Form from './pages/form'
import SingleNumber from './pages/singleNumber'
import DoubleNumber from './pages/doubleNumber'
import Alphabets from './pages/alphabets'
import Spaces from './pages/spaces'

function App() {
  const [state, setState] = useState("")
  const [target,setTarget] = useState("-1")

  const onSetTarget = () => {

    console.log("hellooooooooooo")
    if(state == "1" ){
      setTarget(1)
    }
    if(state == "2"){
      setTarget(2)
    }
    if(!Number(state) && !state.includes(" ")){
      setTarget(3)
    }
    if(!Number(state) && state.includes(" ")){
      setTarget(4)
    }
  }

  return (
    <>
      
      <Form value={state} setValue={setState}/>
      

      <button type='button' onClick={onSetTarget}>ADD</button>

      <div style={{display:"flex",gap:"20px"}}>

      <SingleNumber id = {1} value={state} target={target} setTarget={setTarget}  />
      <DoubleNumber id = {2} value={state} target={target} setTarget={setTarget} />
      <Alphabets id = {3} value={state} target={target} setTarget={setTarget} />
      <Spaces id = {4} value={state} target={target} setTarget={setTarget} />

      </div>
      
    </>
  )
}

export default App
