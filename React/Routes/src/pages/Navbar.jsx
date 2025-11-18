import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const [login, setLogin] = useState(true);

    const logout = () => {
        navigate("/login");
        setLogin(false);
    };

//     return (
//         <>
//             {login ? <NavigationBar data={logout} /> : <></>}
//         </>

//     )
// }

// const NavigationBar = (props) => {
//     const logout = props.data;
    return (
        <div id='nav' className='bg-indigo-300 sticky top-0 left-0 w-full h-[10vh] flex items-center justify-between px-10 text-black'>
            <div className='text-4xl' > Logo</div >
            <ul className='flex gap-4'>
                <li className='border px-4 rounded text-sm'>
                    <Link to="/">Home</Link>  </li>
                <li className='border px-4 rounded text-sm'>
                    <Link to='/users'>Users</Link></li>
                <li className='border px-4 rounded text-sm'>Services</li>
                <li className="border px-4 rounded text-sm bg-red-400">
                    <button className='cursor-pointer' onClick={logout}>
                        {/* <Link to='/login'>
                         Logout
                        </Link>  */}
                        logout
                    </button>
                </li>
            </ul>
            <div>User</div>
        </div >
    )
}

export default Navbar
