import React, { useReducer } from 'react'

const initialState=0;
const reducer =(state:any,action:any)=>{
switch(action){
    case 'increment':
        return state + 1
    case 'decrement':
        return state -1 
    case 'reset' :
        return initialState
    default :
        return state
}
}
function CounterOne() {

  const [count,dispatch]=  useReducer(reducer,initialState)
  return (
    <div>
        <h2 style={{marginTop:'16px'}}>UseReducer Example :</h2>
        <p>Count : {count}</p>
        <button onClick={()=>dispatch('increment')}>Increment </button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne