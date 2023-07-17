import React, {useState, useEffect} from 'react'
import {getDocs} from 'firebase/firestore'
import Post from './Post'
import { postsFirebase } from '../config/firebase';



function Feed() {

  const [posts, setPosts] = useState([]);

  const getData = async() =>{
    //get coordinates from firestore
    const data = await getDocs(postsFirebase);
    setPosts(data.docs.map((doc)=>({
      ...doc.data(),
      id : doc.id
    })))
    console.log(posts)
    console.log("dd");
  }


  useEffect(()=>{
    getData();

  }, [])

  return (
    <div>
      {
        posts.map((post)=>(<Post post={post}/>))
      }
    </div>
  )
}

export default Feed
