import React, { useEffect, useState } from 'react'
import { Post } from './Home';
import ThumbUpIcon  from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import "./PostCard.css"
import { SvgIcon } from '@mui/material';
import { auth, db } from '../../config/firebase';
import { addDoc, collection ,getDocs,query, where} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';


interface Props{
    post :Post;
}
function PostCard(props:Props) {
    const[user]=useAuthState(auth);
    const [likes,setLikes] =useState<number | null></number>(null);
    const {post}=props;
    const likesRef=collection(db,"likes");
    const likesDoc=query(likesRef,where("postId","==",post.id))
    const addLike =async()=>{
        await addDoc(likesRef,{
            userId:user?.uid,
            postId:post?.id,
        })
    }
    const getLikes =async ()=>{
     const data=  await getDocs(likesDoc);
     console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post[]);
     
    }
    useEffect(()=>{
        getLikes()
    },[])
  return (
    <div className='postCard'>
        <div className='postCardHeader'>
            <h1> {post?.title}</h1>
            <h3>{post?.description}</h3>
        </div>
        <div className="postCardFooter">
            {lieks&&<p>@{post?.username}__post.com</p>}
            
        </div>
        <div className='postCardButtons'>
            <p>0:Likes</p>
            <SvgIcon className='likeButton' component={ThumbUpIcon} inheritViewBox  onClick={addLike}/>
            <SvgIcon className="dislikeButton" component={ThumbDownAltIcon} inheritViewBox />
        </div>
    </div>
  )
}

export default PostCard