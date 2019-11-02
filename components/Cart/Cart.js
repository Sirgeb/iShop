import React from 'react';

import PageInfo from '../../components/PageInfo/PageInfo';
import Checkout from '../Checkout/Checkout';
import CartStyles from './CartStyles';

const Cart = () => {

  return (
    <>
    <PageInfo message1="Shopping Cart" message2="You have 1 item in Cart" />
    <CartStyles>
        <table>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td><button>x</button></td>
                <td>
                  <img src="./static/images/items/1.jpg" />
                </td>
                <td> Black Shirt </td>
                <td>
                  <div className="cell-content-wrapper">
                    <button>-</button> <button>5</button> <button>+</button>
                  </div>
                </td>
                <td>$8000</td>
             </tr>
        </tbody>
      </table>
    </CartStyles>
    <Checkout />
    </>
  )
}

export default Cart;
