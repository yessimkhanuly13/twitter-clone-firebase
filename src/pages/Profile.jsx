import React, { useEffect, useState }  from 'react'
import back from '../assets/back.png'
import calendar from '../assets/calendar.png'
import { Link } from 'react-router-dom'
import UnixToDate from '../components/UnixToDate'
import Post from '../components/Post'
import { postsFirebase } from '../config/firebase';
import { useCollectionData } from "react-firebase-hooks/firestore"


function Profile({user}) {
    const [isClicked, setIsCliked] = useState(false);
    const [tweet, setTweet] = useState([]);
    const [tweetAmount, setTweetAmount] = useState(0);
    const [likedTweets, setLikedTweets] = useState([]);

    const [data] = useCollectionData(postsFirebase);
    
    // function orderByDesc(a, b) {
    //     return b.createdAt - a.createdAt;
    // }
    
    const handleTweets = () => {
        const tweetData = data && data.filter((element)=>element.email === user.email);
        const count = data && tweetData && tweetData.length;
        // tweetData.sort(orderByDesc);
        console.log(tweetData)
        setTweet(tweetData);
        setTweetAmount(count)
    }

    const handleLikedTweets = () =>{
        let arr = [];
        data && data.forEach((el)=>{
            if(el.likes.includes(user.email)){
                arr.push(el);
            }
        })
        // arr.sort(orderByDesc)
        data && setLikedTweets(arr);
    }


    useEffect(()=>{
        handleTweets();
        handleLikedTweets();
    },[data])

  return (
    <div className='flex flex-start flex-col border-x-4'>
        <div className='fixed list-none text-xl flex items-center text-start bg-blur'>
            <Link to="/">
                <img className='ml-2 h-8 w-8 hover:bg-slate-300 rounded-full' src={back} alt="back" />
            </Link>
            <div className='ml-2'>
            <li>{user.displayName}</li>
            <li className='text-sm text-slate-500'>{tweetAmount > 1 ? tweetAmount + " tweets" : tweetAmount + " tweet"}</li>
            </div>
        </div>
        <div className=''>
            <img className='mt-32 rounded-full ml-4' src={user.photoURL} alt="" />
            <div className='list-none text-start ml-4'>
                <li>{user.displayName}</li>
                <li className='text-sm text-slate-500'>@{user.email}</li>
                <UnixToDate unix={user.metadata.createdAt}/>
            </div>
            <div className='flex ml-4 list-none text-slate-500 '>
                {/* <li className='cursor-pointer hover:underline underline-offset-1'>{} Followers</li>
                <li className='ml-2 cursor-pointer hover:underline underline-offset-1'>{} Following</li> */}
            </div>
            <div className='grid grid-cols-2 mt-4'>
                <div onClick={() => setIsCliked(false)} className= {isClicked ? ('cursor-pointer hover:bg-slate-200 p-2') : ('cursor-pointer hover:bg-slate-200 p-2 border-b-4 border-b-blue-300')} >Tweets</div>
                <div onClick={() => setIsCliked(true)} className= {!isClicked ? ('cursor-pointer hover:bg-slate-200 p-2') : ('cursor-pointer hover:bg-slate-200 p-2 border-b-4 border-b-blue-300')} >Likes</div>
            </div>
            <div>
                {!isClicked ? tweet && tweet.map((post)=>(<Post post={post}/>)) :
                    likedTweets && likedTweets.map((post)=>(<Post post={post}/>))}
            </div>
        </div>
    </div>
  )
}

export default Profile
