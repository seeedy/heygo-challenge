import React, { useState } from 'react';
import { LocationResults } from '../';
import useDebounce from '../../hooks/useDebounce';
import useFetch from '../../hooks/useFetch';
import styles from './LocationSearchInput.module.css';

const LocationSearchInput = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 250);
  const param = encodeURIComponent(debouncedValue);
  const locations = useFetch(
    `https://code-challenge-backend.herokuapp.com/locations?q=${param}`
  );
  const [inputActive, setInputActive] = useState(false);
  const [activeLocIndex, setActiveLocIndex] = useState(-1);
  const [displayResults, setDisplayResults] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // focus and blur of input
  const handleFocus = () => {
    setInputActive(true);
    setDisplayResults(true);
  };

  const handleBlur = (e) => {
    setInputActive(false);
    setDisplayResults(false);
  };

  // mouse handling
  const handleHover = (locationId) => {
    setActiveLocIndex(
      locations.indexOf(locations.find((loc) => loc.id === locationId))
    );
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

      <LocationResults
        locations={locations}
<<<<<<< HEAD
        searchterm={debouncedValue}
=======
        searchterm={value}
>>>>>>> cd338cf62e7d9b4de56d3aec444b76333a64fca6
        handleHover={handleHover}
        activeLocIndex={activeLocIndex}
        displayResults={displayResults}
      />
    </div>
  );
};

export default LocationSearchInput;
