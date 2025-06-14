import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SportActivityPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities/${id}`)
      .then(response => {
        setActivity(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch sport activity');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading sport activity...</p>;
  if (error) return <p>{error}</p>;
  if (!activity) return <p>No data found</p>;

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>ID: {activity.id}</p>
      <p>Description: {activity.description}</p>
      {/* Tambahkan field lain sesuai data API */}
    </div>
  );
}

export default SportActivityPage;