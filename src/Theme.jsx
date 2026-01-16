import React from 'react'
import { useState } from 'react';
function Theme() {
    const[dark,setDark]=useState(false)
    const togleTheme=()=>{
        setDark(!dark);
    };
  return (
    <div style={{
         height:"100vh",
         display:'flex',
         textAlign:'center',
         alignItems:'center',
         backgroundColor: dark ? "black" : "white",
         color: dark ? "white" : "black"
    }}
    >
        <button onClick={togleTheme}>
        switch to {dark? "light": "dark"}Theme
        </button>
            
      
    </div>
  )
}

export default Theme

