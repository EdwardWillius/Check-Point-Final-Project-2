import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LocationPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/location/provinces', {
      params: {
        is_paginate: true,
        per_page: 5,
        page: 1,
      }
    })
    .then(response => {
      // Data ada di response.data.data (biasanya struktur API seperti ini)
      setLocations(response.data.data);
      setLoading(false);
    })
    .catch(() => {
      setError('Failed to fetch locations');
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading locations...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Locations (Provinces)</h2>
      <ul>
        {locations.map(location => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocationPage;