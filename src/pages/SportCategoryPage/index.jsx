import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SportCategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories?is_paginate=true&per_page=5&page=2')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch sport categories');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading sport categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Sport Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SportCategoryPage;