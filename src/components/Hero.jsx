import React from 'react'

const Hero = () => {
    return (
        <header>
            <img className='w-full hidden md:block ' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt='img' />
            <img className='w-full md:hidden ' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt='img' />
        </header>
    )
}

export default Hero