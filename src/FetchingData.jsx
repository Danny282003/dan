import React, { useEffect, useState } from 'react'
import FetchingData2 from './FetchingData2';

// API - Application Programming Interface 
    // This is used to communicate btw the client side and the server 
    // It's data sent through URL 

// JSON - Javascript Object Notation 
    // This is a data format 

function FetchingData() {
    // let [holdData,setHoldData] = useState('')
    let [holdData2, setHoldData2] = useState([])

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/1')
    //         .then(response => response.json())
    //         .then(data => setHoldData(data));
    // },[])
    // console.log(holdData)


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(response => response.json())
        .then(data2 => setHoldData2(data2));
    },[])

  

    const display = holdData2.map((entry)=>{
        return (
            <FetchingData2 
            key={entry.id}
            {...entry}
            />
        )
    })

        console.log(holdData2)
  return (
    <>
        <div className=' p-2 bg-gray-700 text-white grid grid-cols-5 gap-2.5'>
             {display} 
        </div>
    
    </>
   
    
  )
}

export default FetchingData