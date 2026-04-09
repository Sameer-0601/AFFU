import React from 'react';

const SubscriptionBadge = ({ isSubscribed }) => {
  return (
    <div className={`badge ${isSubscribed ? 'badge-success' : 'badge-muted'}`}>
      {isSubscribed ? '• Subscribed' : 'Not Subscribed'}
    </div>
  );
};

export default SubscriptionBadge;
