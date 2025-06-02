import React from 'react'
import Assignbody4 from './Assignbody4'

function Assignbody3() {
  return (
    <>
        <div className=' w-[20rem] h-[60rem] bg-red-500 m-[auto] relative'>
            <img src="office edited.jpg" alt="workers" className=' w-[70rem] h-[20rem] absolute left-[-10rem] top-[5rem]' />
            <img src="workplace edited.jpg" alt="working" className=' absolute top-[27rem] left-[-5rem] w-[15rem] h-[20rem]' />
            <img src="working edited.jpg" alt="computers" className=' absolute w-[15rem] top-[5rem] right-[-7rem] h-[15rem]' />
            <div className=' w-[35rem] h-[25rem] bg-black absolute bottom-[13rem] right-[-27rem] text-white text-[3rem] font-bold pt-[1rem] text-left pl-[2rem]'>
                Our business consultants can help you adapt to today’s market dynamics nope
            </div>
        </div>
        <Assignbody4 />
    </>
  )
}

export default Assignbody3