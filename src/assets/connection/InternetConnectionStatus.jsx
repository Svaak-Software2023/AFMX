import React, { useState, useEffect } from 'react';


const InternetConnectionStatus = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(()=>{
    if(isOnline) location.reload()
  })

  return (
 
      <div className="bg-white m-0" style={{height:"100vh",width:"100vw"}}>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 ">
            <img src="/images/offline.jpg" className='img-fluid' />
          </div>
          <div className="col-lg-12 col-12 p-3">
           <h3 className='text-center'>Connection lost. Please check your internet connection.</h3>
          </div>
        </div>
      </div>

  );
};





export default InternetConnectionStatus;
