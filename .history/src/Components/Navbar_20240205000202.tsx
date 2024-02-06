import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar} from "./Navbar.css"
function Navbar() {
  return (
    <div>
        <Link to ="/">Home</Link>
        <Link to ="Login">Login</Link>
    </div>
  )
}

export default Navbar