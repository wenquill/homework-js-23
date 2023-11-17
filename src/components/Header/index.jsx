import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
   return (
      <nav>
         <ul>
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/todoapp'>ToDo App</Link>
            </li>
            <li>
               <Link to='/posts'>Posts</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Header
