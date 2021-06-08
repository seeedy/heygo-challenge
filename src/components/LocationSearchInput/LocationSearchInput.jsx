import React, { useEffect, useState } from 'react';
import { LocationResults } from '../';

const LocationSearchInput = () => {
  const [value, setValue] = useState('');
  const [locations, setLocations] = useState();

  useEffect(() => {
    console.log(value);
    const param = encodeURIComponent(value);
    const fetchLocations = async () => {
      const res = await fetch(
        `https://code-challenge-backend.herokuapp.com/locations?q=${param}`
      );
      const locations = await res.json();
      console.log(locations);
      setLocations(locations);
    };
    fetchLocations();
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <LocationResults locations={locations} />
    </div>
  );
};

export default LocationSearchInput;
