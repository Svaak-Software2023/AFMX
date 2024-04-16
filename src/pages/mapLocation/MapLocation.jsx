import { useEffect } from 'react';

//   const iconList = {
//     icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
//     icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
//     icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
//     icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
//   }

const icon = 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png';

  const markerList = [
    { lat: 28.6210, lng: 77.3812, icon: icon },
    { lat: 28.6280, lng: 77.3649, icon: icon },
    { lat: 28.5961, lng: 77.3683, icon: icon },
    { lat: 28.6026, lng: 77.3770, icon: icon }
  ]

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

const style={width: '100vw', height: '100vh'};

export const initMap = () => {
  const map = new window.google.maps.Map(document.getElementById('open_map_view'), {
    mapId: 'd34c272a99808261',
    streetViewControl: false,
    controlSize: 24,
    center: { lat: 28.6210, lng: 77.3812 },
    // center: { lat: 20.5937, lng: 78.9629 },
    zoom: 15,
    // mapTypeId: "satellite"
  });

  markerList.map(x => {
    new window.google.maps.Marker({
      map,
      // title: 'Spatialized HQ',
      icon: {
        url: x.icon,
        scaledSize: new window.google.maps.Size(80, 80),
        anchor: new window.google.maps.Point(18, 18),
        scale: 8.5,
        fillColor: "yellow",
        fillOpacity: 0.4,
        strokeWeight: 0.4
      },
      position: {
        lat:x.lat,
        lng: x.lng
      }
    });
    });

    // Define the LatLng coordinates for the polygon's path.
    const triangleCoords = [
    { lat: 28.6210, lng: 77.3812 },
    { lat: 28.6280, lng: 77.3649 },
    { lat: 28.5961, lng: 77.3683 },
    { lat: 28.6026, lng: 77.3770 }
    ];

    const bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
    

};




const MapLocation = () => {
  useEffect(() => {
   loadGoogleMapScript(() => {
    initMap();
        });
      }, []);
  return (
    <>
      <div style={style} id="open_map_view"></div>
    </>
  )
}

export default MapLocation

