import React from 'react'
import FootersList from './FootersList'

const Footer = () => {
    return (
        <footer className='w-full h-80 bg-gray-900 px-4 text-white pt-16 flex flex-col md:flex-row flex-wrap justify-between md:px-12'>
            <div>
                <img className='w-20' src="https://codeguyakash.github.io//SafeNote/logo192.png" alt="footer-logo" />
                <p>Email use : codeguyakash.dev@gmail.com</p>
            </div>
            <FootersList />
            <FootersList />
            <FootersList />
            <FootersList />

        </footer>
    )
}

export default Footer