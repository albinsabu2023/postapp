import React, { useEffect, useState } from 'react'
import { Post } from './Home'
import "./PostCard.css"
import { addDoc, collection ,query, where,getDocs} from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuthState } from 'react-firebase-hooks/auth';
interface Props {
  post :Post,
} 
interface Like {
  userId :string,
}
function PostCard(props:Props) {
  const [likeCount,setLikeCOunt]=useState<Like[] |null>(null);
  const {post}=props;
  const likesRef =collection (db,"likes");
  const likesDoc=query(likesRef,where("postId","==",post.id))
  const [user]=useAuthState(auth)
  const hasUserLiked =likeCount?.find((like)=>like.userId ===user?.uid
  )
  const addLike =async ()=>{
    await addDoc(likesRef,{
     userId:user?.uid,
     postId:post?.id
    }) 
    setLikeCOunt((prev)=/>{

    })
  }
  
  const getLikes =async ()=>{
    const data=await getDocs(likesDoc);
    setLikeCOunt(data.docs.map((doc)=>({userId:doc.data().userId})));
    
  }
  useEffect (()=>{
    getLikes();
  },[])
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
            {likeCount && <p>{likeCount?.length}:Likes</p>}
            <button onClick={addLike}>{hasUserLiked ? <>&#128078;</>:<>&#128077;</>}</button>
            <button>🗑️</button>
        </div>
    </div>
  )
}

export default PostCard