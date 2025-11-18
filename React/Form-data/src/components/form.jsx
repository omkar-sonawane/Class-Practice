import React from 'react'
import { useState } from 'react';

const Form = ({setUsers}  ) => {

    const[user,setuser] = useState({})

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setuser({...user,[name]:value})
        
    };

    const handleUserAdd = ()=>{
        setUsers((data)=>[...data,user])
    }

    return (
        <form className='w-fit mx-auto bg-gray-200 p-4 rounded shadow-xl flex flex-col gap-4'>

            <h1 className="font-bold">User Form</h1>
            <div className='bg-white rounded-lg flex flex-col p-2'>
                <label className='text-left text-slate-800 capitalize text-xs'>
                    name
                </label>
                <input className=' border rounded-xs' name='name' type="text" onChange={handleChange}/>
            </div>
            <div className='bg-white rounded-lg flex flex-col p-2'>
                <label className='text-left text-slate-800 capitalize text-xs'>
                    email
                </label>
                <input className=' border rounded-xs' name='email' type="text" onChange={handleChange} />
            </div>
            <div className='bg-white rounded-lg flex flex-col p-2'>
                <label className='text-left text-slate-800 capitalize text-xs'>
                    mobile no.
                </label>
                <input className=' border rounded-xs' name='mobile' type="number" onChange={handleChange} />
            </div>
            <div>
                <button type='button' className='border py-0.5 px-4 rounded text-sm text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer' onClick={handleUserAdd}>
                    Add User
                </button>
            </div>
        </form>
    )
}

export default Form
