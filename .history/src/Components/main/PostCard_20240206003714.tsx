import React from 'react'
import { Post } from './Home';
import ThumbUpIcon  from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import "./PostCard.css"
import { SvgIcon } from '@mui/material';
import { db } from '../../config/firebase';
import { collection } from 'firebase/firestore';

interface Props{
    post :Post;
}
function PostCard(props:Props) {
    const {post}=props;
    const likesRef=collection(db,"likes");
  return (
    <div className='postCard'>
        <div className='postCardHeader'>
            <h1> {post?.title}</h1>
            <h3>{post?.description}</h3>
        </div>
        <div className="postCardFooter">
            <p>@{post?.username}__post.com</p>
            
        </div>
        <div className='postCardButtons'>
            <p>0:Likes</p>
            <SvgIcon className='likeButton' component={ThumbUpIcon} inheritViewBox />
            <SvgIcon className="dislikeButton" component={ThumbDownAltIcon} inheritViewBox />
        </div>
    </div>
  )
}

export default PostCard