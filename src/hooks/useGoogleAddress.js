import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (buyerData) => {
  const [map, setMap] = useState({});
  const [data, setData] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${buyerData.apto}+${buyerData.address}+${buyerData.city}&key=${import.meta.env.VITE_GOOGLE_API_KEY}&channel=1`
  
  useEffect(() => {
    request()
  }, []);

  async function request(){
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
    setData(response.data)
  }

  return {map, data};
};

export default useGoogleAddress;
