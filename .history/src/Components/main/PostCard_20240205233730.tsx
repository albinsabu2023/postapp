import React from 'react'
import { Post } from './Home';
interface Props{
    post :Post;
}
function PostCard(props:Props) {
  return (
    <div>
        <div className='postCardHeader'>
            {props.post.title}
        </div>
    </div>
  )
}

export default PostCard