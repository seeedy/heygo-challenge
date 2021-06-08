import React from 'react';
import styles from './LocationResults.module.css';
import { Link } from 'react-router-dom';

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
          <Link
            className={styles.link}
            to={{
              pathname: `/locations/${loc.id}`,
              state: { location: loc },
            }}
          >
            {loc.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocationResults;
