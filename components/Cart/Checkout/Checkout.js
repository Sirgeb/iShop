import React from 'react';

import CheckoutStlyles from './CheckoutStyles';

const Checkout = () => {

  return (
    <CheckoutStlyles>
      <div className="left">
        <button>
            <a>
              ← Back To shopping
            </a>
        </button>
      </div>
      <div className="right">
        <h2>Cart Summary</h2>
        <ul>
          <li>
            <span>Black Shirt x 1 </span>
            <span className="amount">$15000</span>
          </li>
          
          <li className="top-border">
            <span><strong>Total:</strong></span>
            <span className="amount"><strong>$45000</strong></span>
          </li>
        </ul>
          <button className="btn">
            Pay Now
          </button>
      </div>
  </CheckoutStlyles>
  )
}

export default Checkout;
