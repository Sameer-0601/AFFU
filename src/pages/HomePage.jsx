import React from 'react';
import SubscriptionCard from '../components/SubscriptionCard';

const HomePage = ({ services, mySubscriptions }) => {
  return (
    <div className="container">
      <h1 className="page-title">Explore Services</h1>
      <div className="grid">
        {services.map((service) => (
          <SubscriptionCard 
            key={service.id} 
            item={service} 
            isSubscribed={mySubscriptions.some(sub => sub.id === service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
