import React, { useEffect, useState } from 'react'
import like from '../assets/like.png'
import liked from '../assets/liked.png'
import waste from '../assets/waste.png'
import { authFirebase } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Post({post}) {

    const [user] = useAuthState(authFirebase);

    const [isUser, setIsUser] = useState(false);

    useEffect(()=>{
        user && user.email === post.email ? setIsUser(true) : setIsUser(false);
    })

  return (
    <div className='flex flex-start border-y w-full list-none'>
        <img className='ml-2 h-8 rounded-full' src={post.photoURL} alt={post.displayName}/>
        <div className='flex items-start flex-col'>
            <div className='flex flex-start justify-between w-full'>
                <div className='flex flex-start'>
                    <li className='ml-2'>{post.displayName}</li>
                    <li className='ml-2 text-slate-400'>@{post.email}</li>
                    <li className='ml-2 text-slate-400'>{post.time}</li>
                </div>
            </div>
            <div className='ml-2 max-w-xl break-words'>{post.content}</div>
            <div className='flex'>
                <li className='cursor-pointer mt-2 hover:bg-rose-400 rounded-full'><img src={like} className='h-8 p-2'/></li>
                {isUser && (<li className='cursor-pointer mt-2 hover:bg-rose-400 rounded-full'><img src={waste} className='h-8 p-2'/></li>)}
            </div>
            
        </div>
    </div>
  )
}

export default Post
