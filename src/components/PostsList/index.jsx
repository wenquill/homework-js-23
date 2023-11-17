import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getPostsThunk from '../../store/slices/PostsSlise'
import PostItem from '../PostItem'

function PostsList ({ posts, isFetching, error, getPosts }) {
   console.log(posts, isFetching, error)
   useEffect(() => {
      getPosts()
   }, [])

   return (
      <main>
         {isFetching && <div>Loading...</div>}
         {error && <div>Error</div>}
         {!isFetching && !error && (
            <ul>
               {posts.map(p => (
                  <PostItem title={p.title} body={p.body} key={p.id} />
               ))}
            </ul>
         )}
      </main>
   )
}

const mapStateToProps = ({ postsList }) => postsList

const mapDispatchToProps = dispatch => ({
   getPosts: () => dispatch(getPostsThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
