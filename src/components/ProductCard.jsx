import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-52 flex flex-col justify-between mt-12 items-center border-white border-2 rounded-xl p-3'>
      <img className='w-16 block mx-auto' src="https://cdn-icons-png.flaticon.com/512/3227/3227053.png" alt="img" />
      <p className='text-2xl text-gray-700 font-bold text-center'>Different Course</p>
      <p className='text-1xl text-gray-700 font-bold text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, nisi?</p>
    </div>
  )
}

export default ProductCard