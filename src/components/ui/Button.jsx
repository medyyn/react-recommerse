import React from 'react'

export default function Button({ handleClick, className, text, icon}) {
  return (
    <button onClick={handleClick} className={`${className} flex px-5 py-2 items-center gap-2 rounded-lg border border-transparent text-2xl bg-black text-white  transition-all duration-300 ease-in-out md:static md:bg-black  md:text-lg md:text-white md:hover:border-black md:hover:bg-white md:hover:text-black md:hover:shadow-lg`}>
              <p className="hidden md:flex">{text}</p>
              {icon}
            </button>
  )
}
