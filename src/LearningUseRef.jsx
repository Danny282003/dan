import React, { useRef, useState } from 'react'
// Useref is a react hook that is used to get information about a particular html Element. 


function LearningUseRef() {
  let myInp = useRef()
  let [count, setCount] = useState("")

  function cc() {
    setCount(
   myInp.current.value
    )
  }


    
  return (
    <div className=' w-[200px] h-[100px] bg-black text-white'>
      <input type="text" name='first' className=' bg-white border border-black' ref={myInp} onInput={cc}/>

      <p className=' bg-red-600 w-[200px] h-[200px]'>
        {count}
      </p>
    </div>
  )
}

export default LearningUseRef