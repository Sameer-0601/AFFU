import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionBadge from './SubscriptionBadge';
import PriceTag from './PriceTag';

const SubscriptionCard = ({ item, isSubscribed }) => {
  return (
    <div className="card">
      <div className="logo-container">
        <img src={item.logo} alt={item.name} />
      </div>
      
      <SubscriptionBadge isSubscribed={isSubscribed} />
      
      <h3 style={{ marginBottom: '0.25rem' }}>{item.name}</h3>
      <PriceTag price={item.price} />
      
      <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
        <Link to={`/details/${item.id}`} className="btn btn-primary" style={{ width: '100%', display: 'block' }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
