import React from 'react'
import { Link } from 'react-router-dom'
import  "./Navbar.css"
import {auth } from  "../config/firebase"
function Navbar() {
  return (
    <div className="navContainer">
        <Link to ="/">Home</Link>
        <Link to ="Login">Login</Link>
        <div>
            <p>{auth?.currentUser?.displayName}</p>
            <image src={auth?.currentUser?.photoURL || ""}/>
        </div>
        

    </div>
  )
}

export default Navbar