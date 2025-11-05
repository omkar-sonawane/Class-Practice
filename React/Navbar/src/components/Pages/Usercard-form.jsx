import React, { useState } from 'react'
import './userform.css'

const Usercardform = (props) => {

    // const [name,setName] = useState(props.data.name)
    // const handleNameChange = (e) =>{
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }

    // const [Surname,setSurName] = useState(props.data.surname)
    // const handleSurNameChange = (e) =>{
    //     console.log(e.target.value)
    //     setSurName(e.target.value)
    // }

    // const [age,setAge] = useState(props.data.age)
    // const handleAgeChange = (e) =>{
    //     console.log(e.target.value)
    //     setAge(e.target.value)
    // }

    // const [address,setAddress] = useState(props.data.Address)
    // const handleAddressChange = (e) =>{
    //     console.log(e.target.value)
    //     setAddress(e.target.value)
    // }

    const [user , setUser] = useState(props.data)
    const handleChange = (e)=>{
        const fieldname =  e.target.id

        console.log(fieldname)

        let temp_user = {...user}

        if (fieldname == "username"){
            temp_user.name= e.target.value
        }
        if (fieldname == "surname"){
            temp_user.surname = e.target.value
        }
        if (fieldname == "age"){
            temp_user.age = e.target.value
        }
        if (fieldname == "address"){
            temp_user.address = e.target.value
        }
        console.log(temp_user)
        
        setUser(temp_user)
    }


  return (
    <div className="usercard">
      <div className='field'>
        <label >Name - </label>
        <input id='username'  value={user.name}  onChange={handleChange}/>
      </div>
      <div className='field'>
        <label >Surname - </label>
        <input id='surname' value={user.surname} onChange={handleChange} />
      </div>
      <div className='field'>
        <label >Age - </label>
        <input  id='age' value={user.age} onChange={handleChange} />
      </div>
      <div className='field' >
        <label >Address - </label>
        <input id='address' value={user.address} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Usercardform
