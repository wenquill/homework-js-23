import React from 'react'
import styles from './PostItem.module.css'

function PostItem ({title, body}) {
   return (
      <li className={styles.listItem}>
         <h2 className={styles.title}>{title}</h2>
         <p>{body}</p>
      </li>
   )
}

export default PostItem
