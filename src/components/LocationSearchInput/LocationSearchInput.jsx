import React, { useEffect, useState } from 'react';
import { LocationResults } from '../';
import useDebounce from '../../hooks/useDebounce';

const LocationSearchInput = () => {
  const [value, setValue] = useState('');
  const [locations, setLocations] = useState();
  const debouncedValue = useDebounce(value, 250);

  useEffect(() => {
    console.log(debouncedValue);

    const param = encodeURIComponent(debouncedValue);
    const fetchLocations = async () => {
      const res = await fetch(
        `https://code-challenge-backend.herokuapp.com/locations?q=${param}`
      );
      const locations = await res.json();
      console.log(locations);
      setLocations(locations);
    };
    fetchLocations();
  }, [debouncedValue]);

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
