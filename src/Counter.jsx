import React, { useState } from 'react'

function Counter() {
  const [count,setConut]=useState(0)

  const increment=()=>{
    setConut(count+1)
  };
  const decrement=()=>{
    if(count>0){

      setConut(count-1)
    }

  }
      const reset=()=>{
      setConut(0)
    }
  return (
    <div>
      <h2>count{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
