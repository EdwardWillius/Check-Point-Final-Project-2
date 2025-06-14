import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PaymentMethodPage() {
  const [methods, setMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/payment-methods')
      .then(response => {
        setMethods(response.data.data); // biasanya data ada di data.data
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch payment methods');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading payment methods...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Payment Methods</h2>
      <ul>
        {methods.map(method => (
          <li key={method.id}>
            {method.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentMethodPage;