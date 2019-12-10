import React from 'react';
import Link from 'next/link';

import formatMoney from '../../../lib/formatMoney';
import calcTotalPrice from '../../../lib/calcTotalPrice';
import PayNow from '../PayNow';
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
            cartItems.map(cartItem => {
              if (!cartItem.item) return (
                <li>
                  <span>This item has been removed</span>
                </li> 
              )
              return (
                <li key={cartItem.item.id}>
                  <span>{cartItem.item.itemName} x {cartItem.quantity} </span>
                  <span className="amount">{formatMoney(cartItem.item.newPrice * cartItem.quantity)}</span>
                </li>
             )} 
            )
          }
          <li className="top-border">
            <span><strong>Total:</strong></span>
            <span className="amount"><strong>{formatMoney(calcTotalPrice(cartItems))}</strong></span>
          </li>
        </ul>
        <PayNow>
          <button className="btn">
            { cartItems.length ? "Pay Now" : null }
          </button>
        </PayNow>
      </div>
  </CheckoutStlyles>
  )
}

export default Checkout;
