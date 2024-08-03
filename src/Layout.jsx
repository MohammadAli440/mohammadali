import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import './App.css'

function Layout() {
  return (
    <>
    <div className='layout'>
   
    <Header className='header'/>
    <Outlet />
    </div>
    </>
  )
}

export default Layout