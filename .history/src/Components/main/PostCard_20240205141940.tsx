import React, { useEffect } from 'react'
import { Post } from './Home'
import "./PostCard.css"
import { addDoc, collection ,query, where,getDocs} from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuthState } from 'react-firebase-hooks/auth';
interface Props {
  post :Post,
} 
function PostCard(props:Props) {
  const [likeCount,setLikeCOunt]=useState<number>(null);
  const {post}=props;
  const likesRef =collection (db,"likes");
  const likesDoc=query(likesRef,where("postId","==",post.id))
  const [user]=useAuthState(auth)
  
  const addLike =async ()=>{
    await addDoc(likesRef,{
     userId:user?.uid,
     postId:post?.id
    }) 
  }
  
  const getLikes =async ()=>{
    const data=await getDocs(likesDoc);
    console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    
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
            {likeCount && <p>{}:Likes</p>}
            <button onClick={addLike}>&#128077;</button>
            <button>🗑️</button>
        </div>
    </div>
  )
}

export default PostCard