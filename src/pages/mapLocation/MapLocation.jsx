
import React, { useState, useEffect } from 'react';
import GMap from './GMap';


// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === 'object' &&
    typeof window.google.maps === 'object'
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const MapLocation = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <>
      {!loadMap ? <div>Loading...</div> : <GMap />}
    </>
  );
};

export default MapLocation;
