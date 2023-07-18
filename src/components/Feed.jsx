import React, {useState, useEffect} from 'react'
import Post from './Post'
import { postsFirebase } from '../config/firebase';
import { useCollectionData } from "react-firebase-hooks/firestore"




function Feed() {

  const [data] = useCollectionData(postsFirebase, {idField: "id" });

  return (
    <div>
      {
        data && data.map((data)=>(<Post post={data}/>))
      }
    </div>
  )
}

export default Feed
