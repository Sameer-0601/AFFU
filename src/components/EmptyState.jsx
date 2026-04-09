import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({ message }) => {
  return (
    <div className="empty-state">
      <div style={{ fontSize: '3rem' }}>📁</div>
      <h3>{message}</h3>
      <p style={{ marginTop: '0.5rem' }}>Start by exploring available subscriptions.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
        View Services
      </Link>
    </div>
  );
};

export default EmptyState;
