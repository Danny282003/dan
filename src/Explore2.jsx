import React from 'react'

function Explore2(props) {
  return (
    <>
        <div className='main'>
          <div>
           <img src= {props.img} alt="" className=' w-[100%] h-[100%]'/>
          </div>
          <div className='inner'>
          <p className='heading'>{props.heading}</p>
            <p>{props.date}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non autem aut quidem porro dolore deserunt doloremque 
               voluptates. Vitae magnam, sint reiciendis vero doloribus exercitationem maxime quisquam est ipsum recusandae
               libero!
            </p>
          </div>
        </div>
    </>
  )
}

export default Explore2