import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from './LocationDetails.module.css';
import { Link } from 'react-router-dom';
import { LocationMap } from '../../components';

const LocationDetails = () => {
  const { id } = useParams();
  const param = encodeURIComponent(id);
  const details = useFetch(
    `https://code-challenge-backend.herokuapp.com/locations/${param}`
  );
  console.log(details);

  if (!details) return null;

  if (details.message === 'Not found')
    return (
      <div>
        Sorry, we couldn't find this location.{' '}
        <Link to='/'>Back to Search</Link>
      </div>
    );

  return (
    <div className={styles.details}>
      <h1 className={styles.header}>{details.name}</h1>
      <LocationMap
        name={details.name}
        center={{
          lat: details.latitude,
          lng: details.longitude,
        }}
        lat={details.latitude}
        long={details.longitude}
        zoom={10}
      />
    </div>
  );
};

export default LocationDetails;
