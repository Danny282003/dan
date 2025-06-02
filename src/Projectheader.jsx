import React from 'react'

function Projectheader() {
  return (
    <div>
      <nav>
        <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Tour Packages</li>
            <li>Contact</li>
            <li>Explore places</li>
          </ul> 
      </nav>
       
       <div className='sub-head'>
          <p></p>
       </div>
       <div className='famous'> 
            <p>Most Famous Places</p>
            <p className='small'>Recommended</p>
        </div>
    </div>
  )
}

export default Projectheader