import React from 'react'

function PostItem (title, body) {
   return (
      <li>
         <h2>{title}</h2>
         <p>{body}</p>
      </li>
   )
}

export default PostItem
