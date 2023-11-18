import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { PropagateLoader } from 'react-spinners'
import { MdError } from 'react-icons/md'
import { getPostsThunk } from '../../store/slices/PostsSlise'
import PostItem from '../PostItem'
import styles from './PostsList.module.css'

function PostsList ({ posts, isFetching, error, getPosts }) {
   console.log(posts, isFetching, error)
   useEffect(() => {
      getPosts()
   }, [])

   return (
      <>
         {isFetching && (
            <div className={styles.loader}>
               <PropagateLoader color='#000' />
            </div>
         )}
         {error && (
            <div className={styles.error}>
               <MdError size='150' color='orange'/>
               <span className={styles.errorText}>Sorry, it seems like some troubles were happened ):</span>
            </div>
         )}
         {!isFetching && !error && (
            <ul className={styles.list}>
               {posts.map(p => (
                  <PostItem title={p.title} body={p.body} key={p.id} />
               ))}
            </ul>
         )}
      </>
   )
}

const mapStateToProps = ({ postsList }) => postsList

const mapDispatchToProps = dispatch => ({
   getPosts: () => dispatch(getPostsThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
