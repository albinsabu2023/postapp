import React from 'react'
import { Link } from 'react-router-dom'
import  "./Navbar.css"
import {auth } from  "../config/firebase"
function Navbar() {
  return (
    <div className="navContainer">
        <Link to ="/">Home</Link>
        <Link to ="Login">Login</Link>
        <p>{auth?.currentUser?.displayName}</p>
    </div>
  )
}

export default Navbar