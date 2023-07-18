import React, { useEffect, useState } from 'react'
import like from '../assets/like.png'
import liked from '../assets/liked.png'
import waste from '../assets/waste.png'
import { authFirebase, postsFirebase } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {updateDoc, doc, deleteDoc} from 'firebase/firestore'

function Post({post}) {

    const [user] = useAuthState(authFirebase);

    const [isUser, setIsUser] = useState(false);
    const [isLiked, setIsLiked] = useState(false)

    useEffect(()=>{
        user && user.email === post.email ? setIsUser(true) : setIsUser(false);
        user && setIsLiked(post.likes.includes(user.email))
        console.log(post)
    })

    const handleUpdate = () =>{
        const docRef = doc(postsFirebase, post.id);
        if(isLiked === false){
            setIsLiked(true);
            let postLikes = post.likes;
            postLikes.push(user.email);

            updateDoc(docRef, {likes: postLikes})
                .then(()=>console.log("success"))
                .catch((e)=>console.log(e))
        }else if(isLiked === true){
            setIsLiked(false);
            let postLikes = post.likes.filter((el)=>el !== user.email);
            updateDoc(docRef, {likes:postLikes})
                .then(()=>console.log('success'))
                .catch((e)=>console.log(e))
            console.log(postLikes)
        }
    }

    const handleDelete = () =>{
        const docRef = doc(postsFirebase, post.id);
        deleteDoc(docRef)
            .then(()=>console.log('Success'))
            .catch((e)=>console.log(e))
    }

    const unixToDate = (unix) =>{
        const date = new Date(unix);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const year = date.getFullYear();
        return `${day}.${month}.${year}`
    }

  return (
    <div className='flex flex-start border-y w-full list-none'>
        <img className='ml-2 h-8 rounded-full' src={post.photoURL} alt={post.displayName}/>
        <div className='flex items-start flex-col'>
            <div className='flex flex-start justify-between w-full'>
                <div className='flex flex-start'>
                    <li className='ml-2'>{post.displayName}</li>
                    <li className='ml-2 text-slate-400'>@{post.email}</li>
                    <li className='ml-2 text-slate-400'>{unixToDate(post.createdAt)}</li>
                </div>
            </div>
            <div className='ml-2 max-w-xl break-words'>{post.content}</div>
            <div className='flex'>
                <li onClick={()=>user && handleUpdate()} className='cursor-pointer mt-2 hover:bg-rose-400 rounded-full'><img src={!isLiked ? like : liked} className='h-8 p-2'/></li>
                <li className='mt-2.5 text-slate-500 '>{post.likes.length - 1}</li>
                {isUser && (<li onClick={handleDelete} className='ml-6 cursor-pointer mt-2 hover:bg-rose-400 rounded-full'><img src={waste} className='h-8 p-2'/></li>)}
            </div>
            
        </div>
    </div>
  )
}

export default Post
