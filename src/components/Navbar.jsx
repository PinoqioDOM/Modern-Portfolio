import React from 'react'

export default function Navbar() {
  const NavItems = ["ABOUT", "PROJECTS", "CONTACT"]
  
  return (
    <nav className='flex gap-10 text-2xl fixed top-4 right-4 p-6 border-2 border-purple-400/30 rounded-2xl shadow-lg shadow-purple-500/50 bg-black/20 backdrop-blur-sm'>
      {NavItems.map((item, index) => (
        <a 
          key={index} 
          href={`#${item.toLowerCase()}`}
          className='text-white-300 hover:text-purple-400 hover:translate-y-[-5px] cursor-pointer duration-300 transition-all'
        >
          {item}
        </a>
      ))}
    </nav>
  )
}