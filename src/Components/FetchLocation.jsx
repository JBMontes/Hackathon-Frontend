
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleMapsComponent from './GoogleMaps';


const API_KEY = import.meta.env.VITE_API_KEY;

const FetchLocation = () => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState('');

  const endpoint = 'https://hackathon-backend-j9e3.onrender.com/keypins';

  const getUserLocation = async () => {
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
        );

        const formattedAddress =
          response.data.results && response.data.results[0]
            ? response.data.results[0].formatted_address
            : 'No address found';

        setUserAddress(formattedAddress);
      } catch (error) {
        console.error('Error getting location or fetching address:', error);
      }
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('https://hackathon-backend-blmb.onrender.com/keypins');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className='application'>

      <button className="myLocation" onClick={getUserLocation}>Pin My Location</button>

      <p> {userAddress ? <h1 className="userAddress">{userAddress}</h1> : null}</p>


      <div className="map-container">
        <GoogleMapsComponent locations={locations} userLocation={userLocation} userAddress={userAddress} />
      </div>


    </div>
  );
};

export default FetchLocation;