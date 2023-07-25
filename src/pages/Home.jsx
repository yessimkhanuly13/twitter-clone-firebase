import React from 'react'
import { Link } from 'react-router-dom'
import TweetBox from '../components/TweetBox'
import Feed from '../components/Feed'

function Home({user, inputRef}) {
  return (
    <div className='flex flex-start flex-col border-x-4 text-start list-none'>
      <div className='fixed'>
        <Link to='/'>
          <li className='ml-2 text-xl cursor-pointer'>Home</li>
        </Link>
      </div>
      <TweetBox user={user} inputRef={inputRef}/>
      <Feed/>
    </div>
  )
}

export default Home
