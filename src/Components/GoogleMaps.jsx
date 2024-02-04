import React from 'react';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const tronMapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#000000' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#000000' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#ffffff' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#00ff00' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#00ff00' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#001100' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#00ff00' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#001100' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#00ff00' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#001100' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#00ff00' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#001100' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#00ff00' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#000022' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#00ff00' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#000022' }],
  },
];


const GoogleMapsComponent = ({ locations, userLocation }) => {
  const API_KEY = import.meta.env.VITE_API_KEY
  
 

  const center = userLocation && typeof userLocation.latitude === 'number' && typeof userLocation.longitude === 'number'
  ? { lat: userLocation.latitude, lng: userLocation.longitude }
  : { lat: 40.712776, lng: -74.005974 };
  
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onMarkerClick = (location) => {
    setSelectedMarker(location);
  };

  const onInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={{
        //   styles: tronMapStyles,
        }}>

{userLocation && (
          <Marker
            position={{ lat: userLocation.latitude, lng: userLocation.longitude }}
            title="Your Location"
            icon={{  url: 'logoKey.png',
            scaledSize: new window.google.maps.Size(40, 40),}}
          />
        )}

{locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.latitude, lng: location.longitude }}
            title={location.name}
            onClick={() => onMarkerClick(location)} 
          />
        ))}
        
        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.latitude,
              lng: selectedMarker.longitude,
            }}
            onCloseClick={onInfoWindowClose}
          >
            <div>
            {selectedMarker.photos && selectedMarker.photos.length > 0 ? (
      <img
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=${selectedMarker.photos[0].photo_reference}&key=${API_KEY}`}
        alt="Place"
      />
    ) : (
      <p>No photo available</p>
    )}
              <h3>Name: {selectedMarker.name}</h3>
              <h3>Color: {selectedMarker.color}</h3>
              <h3>Comment: {selectedMarker.comment}</h3>
             
            </div>
          </InfoWindow>
        )}

      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
