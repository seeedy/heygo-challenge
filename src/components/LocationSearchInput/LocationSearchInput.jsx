import React, { useEffect, useState } from 'react';

const LocationSearchInput = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(value);
    const param = encodeURIComponent(value);
    const fetchLocations = async () => {
      const res = await fetch(
        `https://code-challenge-backend.herokuapp.com/locations?q=${param}`
      );
      const locations = await res.json();
      console.log(locations);
    };
    fetchLocations();
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};

export default LocationSearchInput;
