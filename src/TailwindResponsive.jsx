import React from 'react'

// sm - 640px above 
// md - 778px above 
// lg - 1024px above 
// xl - 1280x above

function TailwindResponsive() {
  return (
    <div className=' h-[200px] grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
        <div className=' bg-red-600'></div>
        <div className=' bg-red-400'></div>
        <div className=' bg-green-500'></div>
        <div className=' bg-fuchsia-500'></div>
    </div>
  )
}

export default TailwindResponsive