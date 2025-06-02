import React from 'react'
import Content from './Content'
import Header from './Header'
import Body from './Body'
import Footer from './Projectfooter'
// import jokes from './jokes'
// import Flex from './Flex'
import jokes from './jokes'

function Practice() {
  const joke = jokes.map((joking)=>{
    return (
      <Content 
        key={joking.id}
        {...joking}
      />
    )
  })
  return (
  <div className="container">
      <Header />
      <Body />
      <div className='relative'>
         <div className='the-people'>
            {joke}
          </div>
      </div>
      <Footer />
    </div>
  )
}
   
   
   
  


export default Practice