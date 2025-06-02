import React from 'react'

function Assignslider({ change }) {
  return (
    <div className={` ${change ? "left-0" : "left-[-100%]"} w-full h-full bg-black absolute opacity-70 left-[%] duration-500`}>
        <ul className=' text-white flex flex-col gap-[30px] pl-[30px] text-6xl'>
          <li className='border border-white'>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Gallery</li>
          <li>Gallery</li>
        </ul>
    </div>
  )
}

export default Assignslider