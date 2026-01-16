import React,{useState} from 'react'

function Form() {
const [name,setName]=useState("")
const [error,steError]=useState("")
const handle=(e)=>{
     e.preventDefault()
     if(name===""){
      steError("name required")
     }else{
        
        alert("your name is  "+name)
     }

}
  return (
    <div>
      <form onSubmit={handle}>
        <input type="text" placeholder='enter your name'
         onChange={(e)=>setName(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
      <p style={{color:"red"}}>{error}</p>
    </div>
  )
}

export default Form
