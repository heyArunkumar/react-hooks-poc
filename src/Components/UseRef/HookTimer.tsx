import React, { useState ,useRef, useEffect} from 'react'

function HookTimer() {
    const [timer,setTimer]=useState(0)
const intervaltRef:any =useRef()

    useEffect(()=>{
     intervaltRef.current =setInterval(()=>{
        setTimer(preTimer =>preTimer +1)
     },1000)

     return (()=>{
        clearInterval(intervaltRef.current)
     })
    
    },[])
  return (
    <div>
        <h2 style={{marginTop:'16px'}}>UseRef Example 2 :</h2>
        <h5>Hook Counter : {timer}</h5>
        <button onClick={()=>clearInterval(intervaltRef.current)}>Clear Hook Counter</button>
    </div>
  )
}

export default HookTimer