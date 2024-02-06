import React from 'react'
import { Post } from './Home'
interface Props {
  post :Post,
} 
function PostCard(props:Props) {
  const {post}=props;
  return (
    <div className='postCard'>
      <div className='postCardHeader'>
        <h1>{post.title}</h1>
         <h2>{post.description}</h2>
      </div>
      <div className='postCardFooter'>
        <h1>{post.username}</h1>
      </div>
    </div>
  )
}

export default PostCard