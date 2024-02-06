import React from 'react'
import { Link } from 'react-router-dom'
import  "./Navbar.css"
import {auth } from  "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
function Navbar() {
    const  [user] =useAuthState(auth)
  return (
    <div className="navContainer">
        <Link to ="/">Home</Link>
        <Link to ="Login">Login</Link>
        <div>
            <p>{auth?.currentUser?.displayName}</p>
            <img src={auth?.currentUser?.photoURL|| "" } alt="" width="30" height="30"
            />
        </div>
        

    </div>
  )
}

export default Navbar