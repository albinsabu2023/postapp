import React, { useEffect, useState } from 'react'
import { Post } from './Home';
import ThumbUpIcon  from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import "./PostCard.css"
import { SvgIcon } from '@mui/material';
import { auth, db } from '../../config/firebase';
import { addDoc,deleteDoc, collection ,doc,getDocs,query, where} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';



interface Props{
    post :Post;
}
interface Like {
    likeId:string,
    userId:string,

}
function PostCard(props:Props) {
    const[user]=useAuthState(auth);
    const [likes,setLikes] =useState<Like[] | null>(null);
    const {post}=props;
    const likesRef=collection(db,"likes");
     const likesDoc=query(likesRef,where("postId","==",post.id))
    const getLikes =async ()=>{
     const data=  await getDocs(likesDoc);
     setLikes(data.docs.map((doc)=>({userId:doc.data().userId,likeId:doc.id})))
     
    }
     const addLike =async()=>{
        try{
           const newDoc= await addDoc(likesRef,{
            userId:user?.uid,
                postId:post?.id,
            })
            if(user){
                setLikes((prev)=>
                prev?[...prev ,{userId:user?.uid,likeId:doc.id}]:[{userId:user?.uid}]
                )
            }
        }catch(err){console.log(err)
        }
        
    }
   
    const removeLike =async()=>{
        try{
           
            const likeToDeleteQuery =query(likesRef,where("postId","==",post.id),where("userId","==",user?.uid))
             const likeToDeleteData  =await getDocs(likeToDeleteQuery)
            const likeToDelete =doc(db,"likes",likeToDeleteData.docs[0].id)
            await deleteDoc(likeToDelete)
            
            if(user){
                setLikes((prev)=>
                prev?.filter((like)=>like.likeId===likeToDeleteData.docs[0].likeId)
                )
            }
        }catch(err){console.log(err)
        }
        
    }
   
    const hasUserLiked =likes?.find((like)=>
        like?.userId===user?.uid
    )
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
            <p>@{post?.username}__post.com</p>
            
        </div>
        <div className='postCardButtons'>
              <p>{likes?.length} Likes</p>
           { hasUserLiked ?
            <SvgIcon className="dislikeButton" component={ThumbDownAltIcon} inheritViewBox onClick={removeLike} />:
             <SvgIcon className='likeButton' component={ThumbUpIcon} inheritViewBox  onClick={addLike}/> 
           }
        </div>
    </div>
  )
}

export default PostCard