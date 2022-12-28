import React from 'react'
import MAC from '../assets/Figma/mac-gra.png'
import './1app.css'


const Hero = () => {
  return (
    <div className="flex justify-center pt-12 mb-[12em]">
    <div className="woola w-full h-[45vh] bg-[#11071F] justify-center grid md:grid-cols-2 md:grid-rows-none grid-rows-2  mb-[100px] p-10 sm:max-w-[980px] sm:leading-[4em]">

     <div className="1">
          <img className='macImg w-[95em]' src ={MAC} alt="My Happy SVG"/>
          <div className='wo'></div>
    </div>
    <div className="flex flex-col justify-center ml-6">
        <div className="txt-box p-4 grid">
            <p>Hello! I Am <span className='text-[#7127BA]'>JAYDEN QUAYNOR </span></p>
            <h4 className='font-bold'>A Developer who</h4>
            <h1 className='sm:text-[4em]'>Judges a book by its <span className='text-[#7127BA]'>cover</span>...</h1>
            <p className='text-xs font-semibold my-9'>Because if the cover does not impress you what else can?</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero