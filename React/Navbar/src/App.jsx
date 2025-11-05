

import { useState } from 'react';
import './App.css'
import Footer from './components/Pages/Footer'
import Main from './components/Pages/Main'
import Navbar from './components/Pages/Navbar'
import Usercard from './components/Pages/Usercard';
import Usercardform from './components/Pages/Usercard-form';

function App() {

  const [user,setUser]  = useState({
    name: "Aditya",
    surname: "Roy",
    age:25,
    address:"Pune"
  })
    
  

  // console.log(user)
  
  return (
    
    <>
    
      <Navbar/>
      <Main/>
      <Usercard data={user} />
      <Usercardform data={user} setUser={setUser}/>
      <Footer/>
      
    </>
  )
  };


export default App
