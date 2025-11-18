

import './App.css'
import User from './components/user'
import Form from './components/form'
import { useState } from 'react';

const users = [
  { name: "adi", email: "abc@gmail.com", mobile: "0123456789" },
  { name: "om", email: "abc@gmail.com", mobile: "0123456789" },
  { name: "raj", email: "abc@gmail.com", mobile: "0123456789" },
]
function App() {
  
  const [data,setData] = useState(users)

  return (
    <>
    <div className='flex'>
      <Form setUsers={setData}/>
      <User users={data} />
    </div>
    </>
  )
}

export default App
