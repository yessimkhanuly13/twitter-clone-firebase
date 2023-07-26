import React, {useState, useEffect} from 'react'
import Post from './Post'
import { postsFirebase } from '../config/firebase';
import { useCollectionData } from "react-firebase-hooks/firestore"




function Feed() {
  const [tweets, setTweets] = useState([]);
  const [data] = useCollectionData(postsFirebase, {idField: "id" });

  function orderByDesc(a, b) {
    return b.createdAt - a.createdAt;
  }

  const handleTweets = () => {
    const tweetData = data;
    tweetData.sort(orderByDesc);
    setTweets(tweetData);
  }

  useEffect(()=>{
    data && handleTweets();
  })

  return (
    <div>
      {
        data && tweets.map((tweet)=>(<Post post={tweet}/>))
      }
    </div>
  )
}

export default Feed
