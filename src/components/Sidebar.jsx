import React, { useState } from 'react'
import SidebarOption from './SidebarOption'
import twitter from '../assets/twitter.png'
import profile from '../assets/profile.png'
import home from '../assets/home.png'
import { Link } from 'react-router-dom'
import Dropup from './Dropup'
import TweetBox from './TweetBox'

function Sidebar({user, signOut}) {

  const [logOut, setLogOut] = useState(false);
  const [tweetBox, setTweetBox] = useState(false);

  const handleDrop = () =>{
    if(logOut){
      setLogOut(false);
    }else{
      setLogOut(true);
    }
  }

  return (
    <div>
      <div className='fixed h-screen flex flex-col justify-between mr-2'>
          <div>
              <Link to='/'>
                <img className='h-10 cursor-pointer' alt='twitter-icon' src={twitter}/>
              </Link>
              <SidebarOption icon={home} text="Home" route="/"/>
              <SidebarOption icon={profile} text="Profile" route="/profile"/>
              <button onClick={()=>setTweetBox(true)} className='cursor-pointer text-xl bg-blue-400 p-2 rounded-full w-full mt-2 font-bold text-white'>Tweet</button>
              {tweetBox && <div className='absolute left-96 top-64 w-96 bg-slate-300 p-6 rounded-xl'>
                    {user.displayName}
                    <TweetBox user={user} setTweetBox={setTweetBox}/>
                </div>}
          </div>
          <div className='mb-2 flex hover:bg-slate-300 p-2 rounded-full'>
              <img src={user.photoURL} alt='twitter' className='h-8 rounded-full'/>
              <div onClick={handleDrop} className='ml-2 flex flex-col items-start list-none' >
                <li>{user.displayName}</li>
                <li>@{user.email}</li>
              </div>
              {logOut && <Dropup signOut={signOut} user={user}/>}
          </div>
      </div>
    </div>
  )
}
 
export default Sidebar
