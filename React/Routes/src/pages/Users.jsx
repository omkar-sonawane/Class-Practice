import React, { useEffect, useState } from 'react'
import axios from "axios";

const Users = () => {
  const [users,setUsers] = useState([])

  const loadUsers = () =>{
    const d = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUsers(res.data);
    });
    console.log(d)
  };

  useEffect(()=>{
    loadUsers();
  },[])

  return (
    <div>
      {users.map((user)=>(
        <div className='border w-full p-4'>Email-{user.email}<br/></div>
      ))}
    </div>
  )
}

export default Users
