import React from 'react'
import Navbar from './Navbar'
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const Layout = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col justify-start'>
      <Navbar/>
      <div className=' flex-1 flex bg-black'>
        <div className='min-w-45 border bg-white/70'>
            <ul className='  capitalize'>
                <li className='flex px-4'><MdDashboard />Dashboard</li>
                <li className='flex'><FaTasks />tasks </li>
                <li className='flex'>calender</li>
                <li>Analytics</li>
                <li>team</li>
            </ul>
        </div>

        <div className='bg-yellow-100 border  flex-1'>{children}</div>

        <div className='min-w-15 border bg-white/70'>
        <FaHome />
        </div>
      </div>
      
    </div>
  )
}

export default Layout
