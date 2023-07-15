import React from 'react'
import { Link } from 'react-router-dom'

function SidebarOption({icon, text, route}) {
  return (
    <Link to={route}>
      <div  className="mt-2 flex justify-start cursor-pointer hover:bg-slate-300 p-2 rounded-full">
          <img className='h-6' alt={text} src={icon}/>
          <li className='ml-2 list-none text-xl'>{text}</li>
      </div>
    </Link>
  )
}

export default SidebarOption
