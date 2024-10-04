import React from 'react'
import Header from '../Layout/Header'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <>
     <Header/>
     <Outlet/> 
    </>
  )
}

export default Mainlayout
