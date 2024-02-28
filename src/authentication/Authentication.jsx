import React from 'react'
import Login from '../pages/Login/Login';

function Authentication({children}) {
    const user= JSON.parse(localStorage.getItem('user'));
  return (
    user&&user.token?children:<Login/>
  )
}

export default Authentication