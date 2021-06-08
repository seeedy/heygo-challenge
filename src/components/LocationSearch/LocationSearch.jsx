import React from 'react';
import { LocationSearchInput } from '../';
import styles from './LocationSearch.module.css';

const LocationSearch = () => {
  return (
    <div className={styles.search}>
      <h2 className={styles.header}>Search Location</h2>
      <LocationSearchInput />
    </div>
  );
};

export default LocationSearch;
