import React from 'react'
import Explore2 from './Explore2'
import Explorehead from './Explore-head'


function Explore() {
  return (
    <div className='oga'>
        <Explorehead />
        <Explore2 
        img="dice1.png"
        heading="Mount Fuji"
        date="1st feb - 28th feb"
        />
         <Explore2 
        img="big.jpeg"
        heading="Sydney Opera House"
        date="1st march - 31st march"
        />
         <Explore2 
        img="Horse.png"
        heading="Gelrangerfjord"
        date="1st april - 21st april"
        />
    </div>
  )
}

export default Explore