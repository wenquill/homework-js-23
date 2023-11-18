import React from 'react'
import PostsList from '../../components/PostsList'
import styles from './PostsPage.module.css'

function PostsPage () {
   return (
      <main className={styles.main}>
         <h1 className={styles.title}>Posts List</h1>
         <PostsList />
      </main>
   )
}

export default PostsPage
