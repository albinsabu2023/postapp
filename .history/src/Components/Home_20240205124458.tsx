import  { useState } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { db } from '../config/firebase';

function Home() {
  const [postsList,setPostLists]=useState(null)
  const postref=collection(db,"posts");
  const getPosts =async ()=>{
      const data=await getDocs(postref);
     console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      
  }
  getPosts();
  return (
    <div>Home</div>
  )
}

export default Home