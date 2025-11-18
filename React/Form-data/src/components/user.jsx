import React from 'react'

const User = (props) => {


  return (
    <div className="bg-amber-100 p-4 h-fit rounded shadow-xl border border-amber-200">
      <h1> Users List </h1>

      <table >
        <thead>
            <tr className='text-gray-600'>
                <th>name</th>
                <th>email</th>
                <th>mobile</th>
            </tr>
        </thead>
        <tbody>
            {props.users.map((user,index) => {
                return (
                    <tr key={index}>
                        <td className='bg-amber-200 border border-white px-8 py-2 '>
                            {user.name}
                        </td>
                        <td className='bg-amber-200 border border-white px-10 py-6'>
                            {user.email}
                        </td>
                        <td className='bg-amber-200 border border-white px-10 py-6'>
                            {user.mobile}
                        </td>
                    </tr>
                    
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default User
