import React from 'react';
import EmptyState from '../components/EmptyState';
import RenewalInfo from '../components/RenewalInfo';
import PriceTag from '../components/PriceTag';

const MySubscriptionsPage = ({ subscriptions, onUnsubscribe }) => {
  return (
    <div className="container">
      <h1 className="page-title">My Active Plans</h1>
      
      {subscriptions.length === 0 ? (
        <EmptyState message="Your subscription list is empty" />
      ) : (
        <div className="grid">
          {subscriptions.map(sub => (
            <div key={sub.id} className="card">
              <div className="logo-container" style={{ height: '40px', marginBottom: '1.25rem' }}>
                <img src={sub.logo} alt={sub.name} style={{ height: '100%' }} />
              </div>
              
              <h3 style={{ marginBottom: '0.25rem' }}>{sub.name}</h3>
              <PriceTag price={sub.price} />
              <RenewalInfo days={sub.renewalDays} />
              
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <button onClick={() => onUnsubscribe(sub)} className="btn btn-danger" style={{ width: '100%' }}>
                  Cancel Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySubscriptionsPage;
