import React from 'react'



function Extra({ mover }) {

  return (
    <div >
    <div className= {`${mover == true? "left-0" : "left-[-100%]"} absolute bg-black opacity-70 text-white w-full h-full duration-500`}>
            <ul className='border-r-red-600'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>

        <button className=' w-[200px] h-[100px] bg-red-500'>Close</button>
        </div>
      
    </div>
  )
}

export default Extra
