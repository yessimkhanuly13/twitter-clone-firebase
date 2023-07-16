import React from 'react'

function Post({post}) {
  return (
    <div className='flex border-y w-full'>
        {/* <img className='ml-2 h-8 rounded-full' src={post.photoURL} alt={user.displayName}/> */}
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <li className='ml-2'>{post.displayName}</li>
                    <li className='ml-2 text-slate-400'>@{post.email}</li>
                    <li className='ml-2 text-slate-400'>{post.time}</li>
                </div>
                <div className='self-end'>
                    <li className='cursor-pointer'>Delete</li>
                </div>
            </div>
            <div className='ml-2 max-w-xl break-words'>{post.content}</div>
            <div className='flex'>
                <li>{post.likes.length}Likes</li>
            </div>
        </div>
    </div>
  )
}

export default Post
