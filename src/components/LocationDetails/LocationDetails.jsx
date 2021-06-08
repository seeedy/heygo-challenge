import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const LocationDetails = () => {
  const { id } = useParams();
  const details = useFetch(
    `https://code-challenge-backend.herokuapp.com/locations/${id}`
  );
  console.log(details);
  return <div>Details for {id}</div>;
};

export default LocationDetails;
