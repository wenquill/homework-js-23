import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header () {
   return (
      <header className={styles.header}>
         <nav className={styles.navigation}>
            <ul className={styles.list}>
               <li className={styles.listItem}>
                  <Link className={styles.link} to='/'>Home</Link>
               </li>
               <li className={styles.listItem}>
                  <Link className={styles.link} to='/todoapp'>ToDo App</Link>
               </li>
               <li className={styles.listItem}>
                  <Link className={styles.link} to='/posts'>Posts</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
