import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Users from './pages/Users';
import Login from './pages/login';
import Layout from './pages/Layout';

const App = () => {

  return (
    <div>

     {/* <Navbar /> */}

      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Layout><Users /></Layout>} />

      </Routes>

    </div>
  )
}

export default App
