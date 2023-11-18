import React from 'react'
import styles from './NotFound.module.css'

function NotFound () {
   return (
      <main className={styles.main}>
         <div className={styles.text}>
            Sorry, we think that this page does not exist ):
         </div>
      </main>
   )
}

export default NotFound
