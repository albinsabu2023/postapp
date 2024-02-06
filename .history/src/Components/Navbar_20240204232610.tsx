import React from 'react'
import  {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
         {<Link to="/login">Login</Link>}
         <Link to="/createpost">CreatePost</Link>
    </div>
  )
}

export default Navbar