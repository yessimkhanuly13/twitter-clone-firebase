import React from 'react'
import google from '../assets/google.png'

function SigIn({signInWithGoogle}) {
  return (
    <div className='list-none flex cursor-pointer p-4 font-bold hover:bg-slate-300 rounded-full' onClick={signInWithGoogle}>
      <img className='h-8' src={google} alt='google'/>
      <li className='ml-2 '>Sign in with Google</li>
    </div>
  )
}

export default SigIn