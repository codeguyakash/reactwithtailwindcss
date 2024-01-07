import React from 'react'
import Card from './Card';

const OurStudent = () => {
    return (
        <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 '>
            <div>
                <div className='text-indigo-800 font-bold text-3xl'>Our Student</div>
                <div className='bg-yellow-500 h-1 mt-2'></div>
            </div>
            <div className='w-full flex flex-wrap justify-evenly '>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default OurStudent