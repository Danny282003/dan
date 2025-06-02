import React, { useEffect, useState } from 'react'
// useEffect is a react hook that is called anytime there's a change to a specific variable. 
// useEffect is used to run side effects like data fetching, sliders, timer etc 
// It has an array of dependencies where you can specify what variable you want the useEffect to depend on 

function LearningUseEffect() {

    let [num,setNum] = useState(0)
    
    useEffect(()=>{
        console.log("hello")
    },[])//array of dependencies

  return (
    <div>
        <h1 className='text-2xl font-bold'>{num}</h1>
        <button className=' bg-red-600 p-2 rounded-[5px]' onClick={()=> setNum(num+1)}>click me</button>

    </div>
  )
}

export default LearningUseEffect