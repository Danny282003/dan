import React from 'react'

function Projectbody(props) {
  return (
        <div>
            <div className='child1'>
                <img src={props.img.src} alt={props.img.alt} className=' h-[200px]'/>
                <p className='first'>{props.place}</p>
                <p className='second'>{props.description}</p>
                <p className='third'>{props.details}</p>
            </div>
        </div>
   
  )
}

export default Projectbody