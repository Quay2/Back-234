import React from 'react'
import Blocks from './Blocks/blocks'

const Work = () => {
  return (
    <div className="Work m-6  flex justify-center">
        <div className="workBLocks lg:grid lg:grid-cols-2 lg:gap-9 lg:m-20 ">
            <Blocks />
            <Blocks />
            <Blocks />
            <Blocks />
        </div>
    </div>
  )
}

export default Work