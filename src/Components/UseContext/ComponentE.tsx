import React, { useContext } from 'react'
import { EmailContext, UserContext } from '../../App'
import ComponentF from './ComponentF'

function ComponentE() {
   const user = useContext(UserContext)
    const email = useContext(EmailContext)
  return (
    <div>
        <h2 style={{marginTop:'16px'}}>From ComponentE : </h2>
        <p>Name : {user}</p>
        <p>Email : {email}</p>
        <ComponentF />
    </div>
  )
}

export default ComponentE