import React from 'react'
import Login from '../pages/Login/Login';

function Authentication() {
    const user= localStorage.getItem('user');
  return (
    user.token?children:<Login/>
  )
}

export default Authentication