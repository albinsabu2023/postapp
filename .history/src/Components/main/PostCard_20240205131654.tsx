import React from 'react'
import { Post } from './Home'
interface Props {
  post :Post,
} 
function PostCard(props:Props) {
  const {post}=props;
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
    </div>
  )
}

export default PostCard