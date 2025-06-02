import React, { useEffect, useState } from 'react'

function Timer() {
    let [count,setCount] = useState(0)

   

    useEffect(()=>{
        let int =  setInterval(() => {
            setCount(count=count+1)
        }, 50);

        return ()=> clearInterval(int)
    },[])


  return (
    <div>
        <h1 className=' text-4xl font-extrabold'>{count}+</h1>
    </div>
  )
}

export default Timer