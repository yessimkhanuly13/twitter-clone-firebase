import React from 'react'
import google from '../assets/google.png'

function Sigin({signInWithGoogle}) {
  return (
    <div className='list-none flex cursor-pointer p-4 hover:bg-slate-300 rounded-full p-2' onClick={signInWithGoogle}>
      <img className='h-8' src={google} alt='google'/>
      <li className='ml-2'>Sign in with Google</li>
    </div>
  )
}

export default Sigin