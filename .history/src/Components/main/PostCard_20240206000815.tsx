import React from 'react'
import { Post } from './Home';
import ThumbUpIcon  from '@mui/icons-material/ThumbUp';

import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import "./PostCard.css"
import { SvgIcon } from '@mui/material';

interface Props{
    post :Post;
}
function PostCard(props:Props) {
    const {post}=props
  return (
    <div className='postCard'>
        <div className='postCardHeader'>
            <h1> {post?.title}</h1>
            <h3>{post?.description}</h3>
        </div>
        <div className="postCardFooter">
            <p>{post?.username}</p>
        </div>
        <div className='postCardButtons'>
            {0 :}<SvgIcon component={ThumbUpIcon} inheritViewBox />
            <SvgIcon component={ThumbDownAltIcon} inheritViewBox />
        </div>
    </div>
  )
}

export default PostCard