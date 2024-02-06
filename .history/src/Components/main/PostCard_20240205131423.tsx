import React from 'react'
import { Post } from './Home'
interface Props {
  post :Post,
}
function PostCard(props:Props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default PostCard