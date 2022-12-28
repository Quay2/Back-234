import React from 'react'
import './1app.css'
import Typed from 'react-typed';

const About = () => {
    return (
        <div className="flex justify-center mb-[2em]">
        <div className='About woola p-10 max-w-[980px] '>
            <div className="mb-[3em]">
            <Typed
                id="about"
                className='text-5xl mb-6'
                strings={[
                    
                    "I'm a Front-End Developer.",
                    "I'm a UI/UX Engineer.",
                    "I'm a 3D Artist.",]}
                    typeSpeed={80}
                    backSpeed={90}
                    loop >

                </Typed>
            <h2 className='text-lg mb-3'>Currently, I'm a <span className='text-[#693B93]'>Freelance</span>  Front End Developer </h2>
            </div>
            <p className='abText leading-10 text text-sm max-w-[892px]'>Welcome to my portfolio! My name is Jayden Quaynor and I am a self-taught front-end developer with experience in HTML, CSS, JavaScript and its different frameworks such as React. In addition to my technical skills, I also have experience in graphic design, UI/UX, and 3D modeling using Blender.  </p>
        </div>
        </div>
    )
}

export default About