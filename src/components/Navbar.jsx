import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-blue-950 p-5 text-white font-bold flex space-x-5'>
        <div className='flex-auto space-x-3'>
          <Link className='text-white-300' to="/">Home</Link>
          <Link className='text-white-300' to="/">About</Link>
          <Link className='text-white-300' to="/">Contect</Link>
        </div>
        <div className='flex space-x-2'>
          <div>
            <input type="text" className='rounded-md pl-2 pr-2 pt-1 pb-1 bg-gray-200 text-black ' />
          </div>
          <div>
            <button className='rounded-md pl-2 pr-2 pt-1 pb-1 bg-gray-200 text-black'>Search</button>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-red-600 mt-5 font-bold text-center font-mono">
        Hello world!
      </h1>
    </>
  )
}

export default Navbar