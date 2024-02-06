import React from 'react'
import { Post } from './Home'
import "./PostCard.css"
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
        <h1>@{post.username}__</h1>
      </div>
      <div className='postCardButtons'>
        <button>&#128077;</button>
        <button>&#128077;</button>
      </div>
    </div>
  )
}

export default PostCard