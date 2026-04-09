import React, { useState } from 'react';

const BillingPage = ({ subscriptions }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const totalCost = subscriptions.reduce((acc, curr) => acc + curr.price, 0);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      // Reset success message after 5 seconds
      setTimeout(() => setPaymentSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container">
      <h1 className="page-title">Summary & Checkout</h1>
      
      {paymentSuccess && (
        <div style={{ background: '#ecfdf5', color: '#059669', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold', border: '1px solid #10b981' }}>
          Payment Successful ✅ Your subscriptions are now active!
        </div>
      )}

      <div className="card summary-card" style={{ maxWidth: '600px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Order Details</h2>
        
        <div className="summary-grid">
          <div className="summary-item">
            <label>Total Services</label>
            <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{subscriptions.length}</div>
          </div>
          <div className="summary-item">
            <label>Monthly Total</label>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#4f46e5' }}>₹{totalCost}</div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '2.5rem', marginTop: '1rem' }}>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1.25rem' }}
            onClick={handlePayment}
            disabled={subscriptions.length === 0 || isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Proceed to Pay'}
          </button>
          
          <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: '#9ca3af' }}>
            By clicking proceed, you agree to the recurring billing cycle.
          </p>
        </div>
      </div>
      
      {subscriptions.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.125rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
            Subscription Itemization
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {subscriptions.map(sub => (
              <div key={sub.id} style={{ background: 'white', padding: '1.5rem 2rem', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #f3f4f6', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center' }}>
                    <img src={sub.logo} alt={sub.name} style={{ width: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.0625rem' }}>{sub.name}</div>
                    <div style={{ fontSize: '0.8125rem', color: '#9ca3af' }}>Renews in 30 days</div>
                  </div>
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.125rem' }}>₹{sub.price}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPage;
