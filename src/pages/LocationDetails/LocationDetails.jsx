import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from './LocationDetails.module.css';

const LocationDetails = () => {
  const { id } = useParams();
  const details = useFetch(
    `https://code-challenge-backend.herokuapp.com/locations/${id}`
  );
  console.log(details);

  if (!details) return null;

  return (
    <div className={styles.details}>
      <h1>{details.name}</h1>
    </div>
  );
};

export default LocationDetails;
