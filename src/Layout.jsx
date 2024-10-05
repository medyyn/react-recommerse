import React from 'react'
import Navbar from './components/layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import { Toaster } from 'react-hot-toast'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Toaster/>
    <Outlet/>
    <Footer/>
    </>
  )
}
