import React, { useState } from 'react'
import Assignslider from './Assignslider'

function Assignhead() {
  const [change, setChange] = useState(false)
  
  function changer (){
    setChange(!change)
  }
  return (
    <>
    <div onClick={changer}>
      <Assignslider 
      change= {change}
      />
    </div>
        <div className=' mt-[1rem] h-[4rem] flex items-center justify-between'>
        <p className=' ml-[11rem]'><img src="logo.png" alt="logo" /></p>
        <p className=' text-4xl font-bold mr-[250px]' onClick={changer}>E</p>
    </div>
    </>
  
  )
}

export default Assignhead