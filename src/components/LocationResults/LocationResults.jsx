import React from 'react';

const LocationResults = (props) => {
  return (
    <div>
      <ul>
        {props.locations.map((loc) => (
          <li key={loc.id}>{loc.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationResults;
