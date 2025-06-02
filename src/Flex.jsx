import React from 'react'

function Flex(props) {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Department: {props.department}</p>
        <p>school:{props.school}</p>
        <p>Age: {props.age} </p>
        <p>Gender: {props.gender}</p>
    </div>
  )
}

export default Flex