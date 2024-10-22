import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Layout = ({cartCount, cardCount, cartItems}) => {
  return (
    <div className="layout-container">
       {/* <Nav cartCount={cartCount}/> */}
       {/* <Nav cardCount={cardCount}/> */}
       <Nav cartItems={cartItems}/>
       <div className='content'>
            <Outlet/>
       </div>
     
       <Footer/>
       
     
    </div>
  )
}

export default Layout
