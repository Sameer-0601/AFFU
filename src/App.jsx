import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SubscriptionDetailsPage from './pages/SubscriptionDetailsPage';
import MySubscriptionsPage from './pages/MySubscriptionsPage';
import BillingPage from './pages/BillingPage';
import subscriptionData from './data/data';
import './index.css';

const App = () => {
  // Use local data instead of API
  const [services] = useState(subscriptionData);
  const [mySubscriptions, setMySubscriptions] = useState([]);

  const handleSubscribe = (service) => {
    if (!mySubscriptions.find(sub => sub.id === service.id)) {
      setMySubscriptions([...mySubscriptions, service]);
    }
  };

  const handleUnsubscribe = (service) => {
    setMySubscriptions(mySubscriptions.filter(sub => sub.id !== service.id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage services={services} mySubscriptions={mySubscriptions} />} 
        />
        <Route 
          path="/details/:id" 
          element={
            <SubscriptionDetailsPage 
              services={services} 
              mySubscriptions={mySubscriptions}
              onSubscribe={handleSubscribe}
              onUnsubscribe={handleUnsubscribe}
            />
          } 
        />
        <Route 
          path="/my-subscriptions" 
          element={
            <MySubscriptionsPage 
              subscriptions={mySubscriptions} 
              onUnsubscribe={handleUnsubscribe}
            />
          } 
        />
        <Route 
          path="/billing" 
          element={<BillingPage subscriptions={mySubscriptions} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
