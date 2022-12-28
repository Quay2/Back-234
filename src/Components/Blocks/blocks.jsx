 import React from 'react'
 import Mark from '../Blocks/Group 2.svg'



 const Blocks = () => {
   return (
    <div className='lg:max-w-xl Blocks border-[#4F228D] rounded-xl border-t-4 w-3xl'>
      <div className="md:m-6 m-4 flex justify-around  pb-5 ">
          <img src={Mark} alt="" />
        <div className="pl-6 pr-8">
        <div className="max-w-xs mx-4">
          <h1 className='text-3xl font-bold'>Front-End Dev</h1>
          <p className='text-sm my-4'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>     
          <button className='btn bg-[#2C1250] rounded-2xl border-[#693B93] font-bold px-6 py-3'>Learn more</button>
        </div>
        </div>
      </div>
    </div>
   )
 }
 
 export default Blocks