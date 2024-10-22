import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Layout = ({cartCount}) => {
  return (
    <div className="layout-container">
       <Nav cartCount={cartCount}/>
       <div className='content'>
            <Outlet/>
       </div>
     
       <Footer/>
       
     
    </div>
  )
}

export default Layout
