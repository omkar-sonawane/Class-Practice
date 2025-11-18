import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value })
    console.log(state)
  }

  const handleLogin = () => {
    console.log()

    if (state.username != null && state.password != null) {
      localStorage.setItem("data", JSON.stringify(state))
      navigate("/");
    } else {
      alert("fill the data")
    }

  }

  return (

    <div className='flex'>

      <form className='border rounded flex flex-col bg-gray-400 px-10 py-10 h-[45vh] w-fit pt-10 mt-40 ml-150 '>

        <label className='p-2 text-2xl capitalize'>name</label>
        <input className='border bg-white rounded' name='username' id='name' type='text' onChange={handleChange} required />

        <label className='p-2 text-2xl capitalize'>Password</label>
        <input className='border bg-white rounded' name='password' type='password' onChange={handleChange} required />

        {/* <label className='p-2 text-2xl capitalize'>mobile no</label>
        <input className='border' type='number'onChange={handleChnage}  /> */}

        <button type='button' className='border py-1 mt-8 w-fit px-3 ml-12 cursor-pointer' onClick={handleLogin}>Submit</button>

      </form>
      {JSON.stringify(state)}
    </div>

  )
}

export default Login
