import React from 'react';
import styles from './LocationResults.module.css';

const LocationResults = (props) => {
  const { locations, handleHover, activeLocIndex } = props;

  if (locations.length === 0 || !locations) return null;

  return (
    <ul className={styles.results}>
      {props.locations.map((loc) => (
        <li
          className={
            activeLocIndex === locations.indexOf(loc)
              ? `${styles.result} ${styles.active}`
              : `${styles.result}`
          }
          key={loc.id}
          onMouseEnter={() => handleHover(loc.id)}
        >
          {loc.name}
        </li>
      ))}
    </ul>
  );
};

export default LocationResults;
