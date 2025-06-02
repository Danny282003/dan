import React from 'react'


function Padd(props) {
    const styles = {
        backgroundColor: props.color
    }

    const [toggle, setToggle] = React.useState(props.on)

    const add = toggle ? "on" : null

    
    function change(){
         setToggle(prevToggle=>!prevToggle)
    }

  return (
        <button style={styles} className={add} onClick={change}></button>
  )
}

export default Padd