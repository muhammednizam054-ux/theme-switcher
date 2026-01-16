import React, { useEffect, useState } from 'react'

function Fetch() {
    const[demo,setDemo]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setDemo(data.slice(0,10)))
    },[])

  return (
    <div>
       {demo.map((item)=>(
        <p key={item.id}>
          {item.title}
            </p>
        ))}

    </div>
  )
}

export default Fetch
