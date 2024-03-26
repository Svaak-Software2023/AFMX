import React, { useState, useEffect } from 'react';

const InternetConnectionStatus = () => {

  return (
    <div className='container'>
      <div className="d-flex  bg-white my-3">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 p-3">
            <img src="/images/offline.jpg" className='img-fluid' />
          </div>
          <div className="col-lg-12 col-12 p-3">
           <p className='text-center'>Connection lost. Please check your internet connection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetConnectionStatus;
