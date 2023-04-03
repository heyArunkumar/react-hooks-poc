import React, { useEffect,useRef } from 'react'

function FocusInput() {
    const inputRef:any =useRef(null)
    useEffect(()=>{
    inputRef.current.focus()
    },[])
  return (
    <div>
        <h2 style={{marginTop:'16px'}}>UseRef Example: </h2>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default FocusInput