import React from 'react'
import { Link } from 'react-router-dom'
import  "Navbar.css"
function Navbar() {
  return (
    <div className="navContainer">
        <Link to ="/">Home</Link>
        <Link to ="Login">Login</Link>
    </div>
  )
}

export default Navbar