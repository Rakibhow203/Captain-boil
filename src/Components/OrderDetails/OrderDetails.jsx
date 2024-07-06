

import React from 'react';

const OrderDetails = ({ name, description, price, email }) => {
  return (
    <div className="w-96 pt-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Food Name: {name}</h2>
          <p className="font-semibold">
            <span className="font-bold">Food Description:</span> {description}
          </p>
          <p className="font-bold">Price: {price}</p>
          <div className="font-bold">Food Order Detail:</div>
          <div className="font-semibold">
            <h5>Email: {email}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
