import React from 'react'

function Dropup({signOut, user}) {
  return (
    <div className='absolute bottom-20 left-0'>
        <button className='border p-2 rounded-full bg-red-400 text-white font-bold' onClick={signOut}>Log out @{user.email}</button>
    </div>
  )
}

export default Dropup
