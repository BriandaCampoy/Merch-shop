import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapsStyles = {
    height: '50vh',
    width: '100%'
  };
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ['geometry', 'drawing']
  });

  return (
    <>
      {
        isLoaded && (
          <GoogleMap
            mapContainerStyle={mapsStyles}
            zoom={9}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        )
      }
    </>
  );
};

export default Map;
