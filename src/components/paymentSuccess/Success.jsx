import React from 'react';
import ThankyouPage from './ThankyouPage';
import { useParams } from 'react-router-dom';


const Success = () => {
  const message = "Congrats! Your transaction has been successfully done..."
  return (
    <>
      <ThankyouPage message={message} />
    </>
  )
}

export default Success
