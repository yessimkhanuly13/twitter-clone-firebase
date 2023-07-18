import React, { useEffect, useState } from 'react'
import like from '../assets/like.png'
import liked from '../assets/liked.png'
import waste from '../assets/waste.png'
import { authFirebase, postsFirebase } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {updateDoc} from 'firebase/firestore'

function Post({post}) {

    const [user] = useAuthState(authFirebase);

    const [isUser, setIsUser] = useState(false);
    const [isLiked, setIsLiked] = useState(false)

    useEffect(()=>{
        user && user.email === post.email ? setIsUser(true) : setIsUser(false);
        user && setIsLiked(post.likes.includes(user.email))
        console.log(post)
    })

    const handleClick = async() =>{
        if(isLiked === false){
            setIsLiked(true);
            // const docRef = postsFirebase.doc(post.id);
            // let postLikes = post.likes;
            // postLikes.push(user.email) 
            // await updateDoc(docRef, {likes: postLikes})
        }else{
            setIsLiked(false);
            // let postLikes = post.likes;
            // await updateDoc(postsFirebase, {likes:postLikes.filter((el)=>el.email !== user.email)})
        }

        console.log("clicked")
    }

  return (
    <div className='flex flex-start border-y w-full list-none'>
        <img className='ml-2 h-8 rounded-full' src={post.photoURL} alt={post.displayName}/>
        <div className='flex items-start flex-col'>
            <div className='flex flex-start justify-between w-full'>
                <div className='flex flex-start'>
                    <li className='ml-2'>{post.displayName}</li>
                    <li className='ml-2 text-slate-400'>@{post.email}</li>
                    <li className='ml-2 text-slate-400'>{Date.now() - post.createdAt}</li>
                </div>
            </div>
            <div className='ml-2 max-w-xl break-words'>{post.content}</div>
            <div className='flex'>
                <li onClick={()=>user && handleClick()} className='cursor-pointer mt-2 hover:bg-rose-400 rounded-full'><img src={!isLiked ? like : liked} className='h-8 p-2'/></li>
                {isUser && (<li className='cursor-pointer mt-2 hover:bg-rose-400 rounded-full'><img src={waste} className='h-8 p-2'/></li>)}
            </div>
            
        </div>
    </div>
  )
}

export default Post
