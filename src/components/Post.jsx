import React from 'react'

function Post({user /*, data*/}) {
  return (
    <div className='flex border-y w-full'>
        <img className='ml-2 h-8 rounded-full' src={user.photoURL} alt={user.displayName}/>
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <li className='ml-2'>{user.displayName}</li>
                    <li className='ml-2 text-slate-400'>@{user.email}</li>
                    <li className='ml-2 text-slate-400'>8h</li>
                </div>
                <div className='self-end'>
                    <li className='cursor-pointer'>Delete</li>
                </div>
            </div>
            <div className='ml-2 max-w-xl break-words'>dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddss</div>
            <div className='flex'>
                <li>Likes</li>
            </div>
        </div>
    </div>
  )
}

export default Post
