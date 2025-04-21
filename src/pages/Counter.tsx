import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [counter,setCounter]=useState(0)
  const [input,setInput]=useState("")
  useEffect(()=>{
      setCounter(0);
  },[input  ])
  return (
    <div>Counter: ${counter}
    <input onChange={(e)=>{setInput(e.target.value)}} value={input} className='h-10 w-full'/>
    <button onClick={()=>setCounter((prev)=>prev+1)}>
      Counter
    </button>
    <button onClick={()=>alert(input)}>
      Counter
    </button>
    </div>
  )
}

export default Counter

