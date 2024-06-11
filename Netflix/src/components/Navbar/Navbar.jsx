import React, { useEffect, useReducer, useRef } from 'react'
import './Navbar.css'

import search_icon from '../../assets/search_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navref = useRef()

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=80){
      navref.current.classList.add('nav-dark')
    }else{
navref.current.classList.remove('nav-dark')
    }
  })
},[])

  return (
    <div ref={navref} className='navbar'>
      <div className="nav-left">
        <img src="./logo.png" alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="" className='icons' />
      <p>children</p>
      <img src="./bell_icon.svg" alt="" />
      <div className="navbar-profile">
        <img src="./profile_img.png" alt="" />
        <img src="./caret_icon.svg" alt="" />
        <div  className="dropdown">
         <p onClick={()=>{logout()}}> Sign out of netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
