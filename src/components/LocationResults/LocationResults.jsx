import React from 'react';
import styles from './LocationResults.module.css';
import { Link } from 'react-router-dom';

const LocationResults = (props) => {
  const { locations, handleHover, activeLocIndex, displayResults } = props;

  if (!locations || locations.length === 0) return null;

  return (
    displayResults && (
      <ul className={styles.results} onMouseDown={(e) => e.preventDefault()}>
        {props.locations.map((loc) => (
          <Link
            key={loc.id}
            className={styles.link}
            to={{
              pathname: `/locations/${loc.id}`,
              state: { location: loc },
            }}
            // prevent the input onBlur to fire before the transition happens
          >
            <li
              className={
                activeLocIndex === locations.indexOf(loc)
                  ? `${styles.result} ${styles.active}`
                  : `${styles.result}`
              }
              onMouseEnter={() => handleHover(loc.id)}
            >
              {loc.name}
            </li>
          </Link>
        ))}
      </ul>
    )
  );
};

export default LocationResults;
