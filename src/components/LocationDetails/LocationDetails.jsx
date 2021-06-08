import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const LocationDetails = () => {
  const { id } = useParams();
  return <div>DEtails for {id}</div>;
};

export default LocationDetails;
