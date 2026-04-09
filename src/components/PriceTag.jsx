import React from 'react';

const PriceTag = ({ price }) => {
  return (
    <div className="price-tag">
      ₹{price} <span>/ month</span>
    </div>
  );
};

export default PriceTag;
