import React from 'react'
import About from './about'

const Navbar = () => {
  return (
    <header className='flex justify-around p-7 bg-[#1A0B2E] text-[#fff]'>
        <div className="logo cursor-pointer font-bold">QUAYNOR</div>
        <nav>
            <ul className='flex cursor-pointer  '>
                <li className='mx-6 hove '><a href="home">Home</a></li>
                <li className='mx-6 hove '><a href={About}>About</a></li>
                <li className='mx-6 hove '><a href="Projects">Projects</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar