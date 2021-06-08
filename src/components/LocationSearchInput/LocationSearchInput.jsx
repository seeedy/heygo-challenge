import React, { useEffect, useState } from 'react';
import { LocationResults } from '../';
import useDebounce from '../../hooks/useDebounce';
import styles from './LocationSearchInput.module.css';

const LocationSearchInput = () => {
  const [value, setValue] = useState('');
  const [locations, setLocations] = useState([]);
  const [inputActive, setInputActive] = useState(false);
  const debouncedValue = useDebounce(value, 250);

  useEffect(() => {
    const param = encodeURIComponent(debouncedValue);
    const fetchLocations = async () => {
      const res = await fetch(
        `https://code-challenge-backend.herokuapp.com/locations?q=${param}`
      );
      const locations = await res.json();
      setLocations(locations);
    };
    fetchLocations();
  }, [debouncedValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setInputActive(true);
  };

  const handleBlur = () => {
    setInputActive(false);
    setLocations([]);
  };

  return (
    <div>
      <div
        className={
          inputActive
            ? `${styles.inputDiv} ${styles.active}`
            : `${styles.inputDiv}`
        }
      >
        <input
          className={styles.input}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <LocationResults locations={locations} />
    </div>
  );
};

export default LocationSearchInput;
