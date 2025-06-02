import React from 'react'
import Two from './Two'
// Props - short for properties, 
// props is used to pass data or values from a parent component to a child component. 

function LearningProps() {
    let cc =()=> {
        alert("hii")
    }

    function coco() {
        alert("hello")
    }

  return (
    <div className=' h-[200px] bg-teal-500'>
        This is LearningProps component
        <Two name="John" myFun={cc} dan=" p-[5px] bg-yellow-400 text-black" myText="clicker"/>
        And there's another one
        <Two name="Ada" myFun={coco} dan=" p-[5px] bg-black" myText="clicko"/>
    </div>
  )
}

export default LearningProps