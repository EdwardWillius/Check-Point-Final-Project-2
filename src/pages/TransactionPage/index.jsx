import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/my-transaction', {
      params: {
        is_paginate: false,
        per_page: 5,
        page: 1,
        search: '',
      }
    })
    .then(response => {
      setTransactions(response.data.data || []);
      setLoading(false);
    })
    .catch(() => {
      setError('Failed to fetch transactions');
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map(tx => (
            <li key={tx.id}>
              <strong>ID:</strong> {tx.id} <br />
              <strong>Status:</strong> {tx.status} <br />
              <strong>Total:</strong> {tx.total_price} <br />
              {/* Tambahkan info lain sesuai data yang tersedia */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionPage;