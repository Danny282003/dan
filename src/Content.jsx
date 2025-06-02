import React from 'react'


function Content(props) {


  return (
    <div className='container2'>
        <div className= "middle">
            <img src={props.img} alt="big wolf" className=' h-[150px] w-[150px] '/>
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    </div>
  )
}

export default Content