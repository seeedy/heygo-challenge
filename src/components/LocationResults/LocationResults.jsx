import React from 'react';
import styles from './LocationResults.module.css';

const LocationResults = (props) => {
  const { locations } = props;

  if (locations.length === 0 || !locations) return null;

  return (
    <ul className={styles.results}>
      {props.locations.map((loc) => (
        <li className={styles.result} key={loc.id}>
          {loc.name}
        </li>
      ))}
    </ul>
  );
};

export default LocationResults;
