import React from 'react'
import { AiOutlineInstagram,AiOutlineLinkedin,AiOutlineTwitter} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer px-[6em] pt-[5em] pb-[6em]">
        <h1 className='text-2xl mb-10'>Contact</h1>
        <p className='text-sm my-5'>I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect.</p>
        <p className='text-sm my-5'>JaydenQuaynor@gmail.com</p>
        <div className=" flex gap-6">
        <AiOutlineInstagram />
        <AiOutlineLinkedin />
        <AiOutlineTwitter />
        </div>
    </div>
  )
}

export default Footer