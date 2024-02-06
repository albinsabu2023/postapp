import React from 'react'
import { Post } from './Home';
interface Props{
    post :Post;
}
function PostCard(props:Props) {
  return (
    <div>
        <div className='postCardHeader'>
            <h1> {props.post?.title}</h1>
            <p>{props.post?.description}</p>
        </div>
        <div className="postCardFooter">
            <p>{props.post?.username}</p>
        </div>
    </div>
  )
}

export default PostCard