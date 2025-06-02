import React from 'react'
import Projectheader from './Projectheader'
import Projectbody from './Projectbody'
import Projectfooter from './Projectfooter'
import project from './project'

function Project() {
    const data = project.map((entry)=>{
        return (
            <Projectbody 
                key={entry.id}
                {...entry}
            />
        )
    })
  return (
    <div>
        <Projectheader />
        <div className='body'> 
          {data}
        </div>
        
        <Projectfooter />
    </div>
  )
}

export default Project