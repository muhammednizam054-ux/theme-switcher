import React from 'react'
import Child from './Child'
function Parent() {
    const handleClick=()=>{
        alert("button clicked in child")
    }
  return (
       <Child onClick={handleClick}/>
  )
}

export default Parent
