import React from 'react'

function FetchingData2(props) {
  return (
    <>
    <div>
        <div className=' h-[200px]'>
            <img src={props.image} className=' w-full h-full'/>
        </div>
        <h1 className=' text-[20px] font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{props.title}</h1>
        <p>{props.price}</p>
    </div>    
    </>
  )
}

export default FetchingData2