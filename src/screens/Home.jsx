import React from 'react'
import Navbar from './../components/Navbar';
import OurStudent from './../components/OurStudent';
import Hero from '../components/Hero';
import ProductCard from './../components/ProductCard';
import Footer from './../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <OurStudent />
            <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 bg-indigo-200'>
                <div>
                    <div className='text-indigo-800 font-bold text-3xl'>Our Products</div>
                    <div className='bg-yellow-500 h-1 mt-2'></div>
                </div>
                <div className='w-[90%] flex flex-wrap justify-around '>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className=''>
                <Footer/>
            </div>

        </>
    )
}

export default Home