import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-14 bg-indigo-200 flex justify-between items-center p-4'>
                <div className='text-2xl text-indigo-900 font-semibold' >codeguyakash</div>
                <ul className='hidden md:flex font-semibold '>
                    <li className='mx-[10px] cursor-pointer'>Home</li>
                    <li className='mx-[10px] cursor-pointer'>About</li>
                    <li className='mx-[10px] cursor-pointer'>Contact US</li>
                </ul>
                <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer '>Login/Signup</div>
                <div className='md:hidden'>
                    <a className='text-4xl' href="#">&#8801;</a>
                </div>
            </nav>
    </>
  )
}

export default Navbar