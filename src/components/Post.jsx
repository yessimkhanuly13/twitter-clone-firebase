import React from 'react'

function Post({post}) {
  return (
    <div className='flex border-y w-full list-none'>
        <img className='ml-2 h-8 rounded-full' src={post.photoURL} alt={post.displayName}/>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
                <div className='flex flex-start'>
                    <li className='ml-2'>{post.displayName}</li>
                    <li className='ml-2 text-slate-400'>@{post.email}</li>
                    <li className='ml-2 text-slate-400'>{post.time}</li>
                </div>
                <div className='flex-end'>
                    <li className='cursor-pointer'>Delete</li>
                </div>
            </div>
            <div className='ml-2 max-w-xl break-words'>{post.content}</div>
            <div className='flex'>
                <li>Likes</li>
            </div>
        </div>
    </div>
  )
}

export default Post
