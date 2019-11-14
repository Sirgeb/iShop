import React from 'react';

import PageInfo from '../../components/PageInfo/PageInfo';
import Checkout from './Checkout/Checkout';
import Table from '../styles/Table';
import User from '../User/User';
import Spinner from '../Spinner/Spinner';
import formatMoney from '../../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

const Cart = () => {

  return (
    <User>
      {
        ({ data, loading }) => {
          
          if (loading) {
            return <Spinner spacing="200px" />;
          } 

          return (
            <>
            <PageInfo 
              message1={"Shopping Cart"} 
              message2={`You have ${data.me.cart.length} ${data.me.cart.length === 0 || data.me.cart.length === 1 ? "item": "items"} in your cart`}
            />
              <Table>
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
                  {
                    data.me.cart.map(cartItem => (
                      <tr key={cartItem.id}>
                        <td><RemoveFromCart id={cartItem.id}/></td>
                        <td>
                          <img src={cartItem.item.image1} />
                        </td>
                        <td> {cartItem.item.itemName} </td>
                        <td>
                          <div className="cell-content-wrapper">
                            <button>-</button> <button>5</button> <button>+</button>
                          </div>
                        </td>
                        <td>{formatMoney(cartItem.item.newPrice)}</td>
                    </tr>
                    ))
                  }
                </tbody>
              </Table>
            <Checkout cartItems={data.me.cart}/>
            </>
          )
        }
      }
    </User>
  )
}

export default Cart;
