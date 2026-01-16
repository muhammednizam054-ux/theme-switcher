import React from 'react'
import { useState } from 'react'

function Button() {
    const[input,setInput]=useState("")
    const[demo,setDemo]=useState("")
    const handleSubmit=()=>{
    return setInput(demo)
    }
  return (
    <div>

        <input type="text" placeholder='enter your full name' onChange={(e)=>setDemo(e.target.value)} />
    
        
      <button onClick={handleSubmit} >submit</button>
      <p>

      {input}
      </p>
    </div>
  )
}

export default Button
