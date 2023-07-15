import React from 'react'

function TweetBox({user, setTweetBox}) {
  return (
    <div className= 'mt-12 flex border-y'>
        <img className='h-16 rounded-full' src={user.photoURL} alt="" />
        <div className='flex flex-col w-full ml-2'>
          <textarea className='w-full h-24' placeholder="What's happening?"  type="text"/>
          <button onClick={()=>setTweetBox(false)} className='text-white bg-blue-400 font-bold rounded-full w-32 h-8 self-end m-2'>Tweet</button>
        </div>
      </div>
  )
}

export default TweetBox
