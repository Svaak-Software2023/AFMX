import React, { useEffect} from 'react';
import { loadModules } from "esri-loader";
import "./MapLocation.css";


// using this api for countries boundry layer  https://nominatim.openstreetmap.org/search.php?q=china&polygon_geojson=1&format=geojson


 const cityData= [
    {
      name: 'Florida',
      latLng: [27.727900169801135, -81.89242692938271]
    },
    {
      name: 'New York City, NY',
      latLng: [40.7128, -74.006]
    },
    {
      name: 'Baltimore, MD',
      latLng: [39.2904, -76.6122]
    },
    {
      name: 'Lincoln, NE',
      latLng: [40.8136, -96.7026]
    },
    {
      name: 'Los Angeles, CA',
      latLng: [34.0522, -118.2437]
    },
  ];

 const nastedCityData= [
    {
      name: 'Orlando',
      latLng: [28.599588416393285, -81.4364943300728]
    }
  ];


  






const GMap = () => {

    let map;

   useEffect( ()=>{

   




    loadModules([
      'esri/Map',
      'esri/views/SceneView',
      'esri/widgets/Search',
      'esri/widgets/Locate',
      'esri/widgets/BasemapToggle',
      'esri/layers/GeoJSONLayer',
      'esri/Graphic',
      'esri/layers/GraphicsLayer',
      'esri/symbols/PictureMarkerSymbol',
      'esri/geometry/Point'
    ]).then(([
      Map,
      SceneView,
      Search,
      Locate,
      BasemapToggle,
      GeoJSONLayer,
      Graphic,
      GraphicsLayer,
      PictureMarkerSymbol,
      Point
    ]) =>{
      map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });
      
      const view = new SceneView({
        container: "viewDiv",
        map: map,
        center: [-86.049, 38.485],
        zoom: 2.5
      });
      
  
  
  
      const searchWidget = new Search({view: view});
      view.ui.add(searchWidget, {position: "top-right"});
  
      const locateBtn = new Locate({view: view});
      view.ui.add(locateBtn, {position: "top-left"});

      // Create a graphics layer
   var graphicsLayer = new GraphicsLayer();
  
   // Add the graphics layer to the map
   map.add(graphicsLayer);
  
     // Define the URL for the marker icon
     const markerIconUrl = "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png";
  
     // Define a picture marker symbol with the URL
     const markerSymbol = new PictureMarkerSymbol({
       url: markerIconUrl,
       width: "50px",
       height: "50px"
     });
      
   
  
      const toggle = new BasemapToggle({
        // 2 - Set properties
        view: view, // view that provides access to the map's 'topo-vector' basemap
        nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
      });
      // view.ui.add(toggle, {position: "top-right"});

      fetch(`${import.meta.env.VITE_DB_URL}/api/all-country`).then((countryRes)=>countryRes.json()).then((country)=>{
        console.log('cpount////',country.getResponse);
        country.getResponse.map((res)=>{
          if(res.isFlag){ 
        console.log('cpount//eeeeeeee//',res.countryId);

            // setTimeout(() => {
            //   fetch(`https://nominatim.openstreetmap.org/search.php?q=${res.countryShortName}&polygon_geojson=1&format=geojson`).then((response)=>response.json()).then((geoJsonData)=>{
            //   const blob = new Blob([JSON.stringify(geoJsonData)], {
            //     type: "application/json"
            //   });
          
            //   const url = URL.createObjectURL(blob);
            //   const geoJSONLayer = new GeoJSONLayer({
            //     url,
            //     renderer: {
            //       type: "simple",
            //       symbol: {
            //         type: "simple-fill",
            //         size: 10,
            //         outline: {
            //           color: "#EEB0AC",
            //           width: 1
            //         }
            //       }
            //     }
            //   });
            //   map.add(geoJSONLayer);
            //     })
            // }, 10000);

            fetch(`${import.meta.env.VITE_DB_URL}/api/all-state?countryId=${res.countryId}`).then((res)=>res.json()).then((response)=>{
              response.getResponse.map((stateData)=>{
                if(stateData.isFlag && stateData.latLng !== undefined){
                  console.log('stateData.latLng.coordinates',stateData.latLng.coordinates);
                    const [lng, lat] = stateData.latLng.coordinates;
                    const point = new Point({
                      longitude: lng,
                      latitude: lat
                    });
                   const graphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol,
                    attributes: {
                      name: stateData.stateName
                    }
                  });
                  graphicsLayer.add(graphic);

                }
              })
            })
    
          }
        })
      })
     
  
     
  
  
   
  
  
    //  cityData.forEach((city) => {
    //   const [lat, lng] = city.latLng;
    //   const point = new Point({
    //     longitude: lng,
    //     latitude: lat
    //   });
    //  const graphic = new Graphic({
    //   geometry: point,
    //   symbol: markerSymbol,
    //   attributes: {
    //     name: city.name
    //   }
    // });
    // graphicsLayer.add(graphic);
    // });
  

    //  nastedCityData.forEach((city) => {
    //   const [lat, lng] = city.latLng;
    //   const point = new Point({
    //     longitude: lng,
    //     latitude: lat
    //   });
    //  const graphic = new Graphic({
    //   geometry: point,
    //   symbol: markerSymbol,
    //   attributes: {
    //     name: city.name
    //   }
    // });
  
    // graphicsLayer.add(graphic);
   
    // });
  
   
   
    return () => {
      // Clean up resources
      if (view) {
        // destroy the map view
        view.destroy();
      }
    };
    })
    },[]);


    

  return (
    <>
         <div id="viewDiv"></div>
    </>
  )
}

export default GMap;