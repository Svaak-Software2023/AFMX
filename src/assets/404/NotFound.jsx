import React from 'react'
import notFound from "../../../public/images/pageNotFound.jpeg"

function NotFound() {
  return (
    <div className='container'>
    <div className="d-flex justify-content-center bg-white">
        <img src={notFound} className='img-fluid'/>
    </div>
    </div>
  )
}

export default NotFound