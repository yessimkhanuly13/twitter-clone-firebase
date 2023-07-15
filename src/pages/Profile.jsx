import React  from 'react'
import back from '../assets/back.png'
import { Link } from 'react-router-dom'

function Profile({user}) {
    
    // const dateConverter = () =>{
    //     const unixTime = user.metadata.createdAt;
    //     const dateUnix = new Date(unixTime);
        
    //     console.log(dateUnix)
    //     const month = dateUnix.getMonth() + 1;
    //     const day = dateUnix.getDate();

    //     return " " + month + " " + day
    // }

  return (
    <div className='flex flex-start flex-col border-x-4'>
        <div className='fixed list-none text-xl flex items-center text-start bg-blur'>
            <Link to="/">
                <img className='ml-2 h-8 w-8 hover:bg-slate-300 rounded-full' src={back} alt="back" />
            </Link>
            <div className='ml-2'>
            <li>{user.displayName}</li>
            <li className='text-sm'> 0 Tweet </li>
            </div>
        </div>
        <div className=''>
            <img className='mt-32 rounded-full ml-4' src={user.photoURL} alt="" />
            <div className='list-none text-start ml-4'>
                <li>{user.displayName}</li>
                <li className='text-sm'>@{user.email}</li>
                <li></li>
            </div>
        </div>
    </div>
  )
}

export default Profile
