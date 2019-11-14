import React from 'react';
import Link from 'next/link';

import formatMoney from '../../../lib/formatMoney';
import calcTotalPrice from '../../../lib/calcTotalPrice';
import CheckoutStlyles from './CheckoutStyles';

const Checkout = ({ cartItems }) => {
  return (
    <CheckoutStlyles>
      <div className="left">
        <Link href="/">
          <a>
            <button>
                  ← Back To shopping
            </button>
          </a>
        </Link>
      </div>
      <div className="right">
        <h2>Cart Summary</h2>
        <ul>
          {
            cartItems.map(cartItem => (
              <li key={cartItem.item.id}>
                <span>{cartItem.item.itemName} x {cartItem.quantity} </span>
                <span className="amount">{formatMoney(cartItem.item.newPrice)}</span>
              </li>
            ))
          }
          <li className="top-border">
            <span><strong>Total:</strong></span>
            <span className="amount"><strong>{formatMoney(calcTotalPrice(cartItems))}</strong></span>
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
