import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubscriptionBadge from '../components/SubscriptionBadge';
import PriceTag from '../components/PriceTag';
import RenewalInfo from '../components/RenewalInfo';

const SubscriptionDetailsPage = ({ services, mySubscriptions, onSubscribe, onUnsubscribe }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === parseInt(id));
  const isSubscribed = mySubscriptions.some(sub => sub.id === parseInt(id));

  if (!service) return <div className="container"><h1>Not Found</h1></div>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn btn-danger" style={{ background: 'transparent', padding: '0.5rem 0', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        &larr; Back to services
      </button>
      
      <div className="card" style={{ padding: '3rem', maxWidth: '850px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 150px' }}>
            <img src={service.logo} alt={service.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          
          <div style={{ flex: '1 1 300px' }}>
            <SubscriptionBadge isSubscribed={isSubscribed} />
            <h1 style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>{service.name}</h1>
            <PriceTag price={service.price} />
            <RenewalInfo days={service.renewalDays} />
            
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              {service.description}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {!isSubscribed ? (
                <button 
                  onClick={() => onSubscribe(service)} 
                  className="btn btn-primary" 
                  style={{ flex: 1, padding: '1.125rem' }}
                >
                  Subscribe to {service.name}
                </button>
              ) : (
                <button 
                  onClick={() => onUnsubscribe(service)} 
                  className="btn btn-danger" 
                  style={{ flex: 1, padding: '1.125rem' }}
                >
                  Unsubscribe
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetailsPage;
