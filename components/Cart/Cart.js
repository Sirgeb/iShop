import React from 'react';
import Head from 'next/head';

import PageInfo from '../../components/PageInfo/PageInfo';
import Checkout from './Checkout/Checkout';
import Table from '../styles/Table';
import User from '../User/User';
import Spinner from '../Spinner/Spinner';
import formatMoney from '../../lib/formatMoney';
import formatLetters from '../../lib/formatLetters';
import RemoveFromCart from './RemoveFromCart';
import IncreaseItem from './IncreaseItem';
import DecreaseItem from './DecreaseItem';

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
            <Head>
              <title>iShop | Shopping Cart </title>
            </Head>
            
            <PageInfo 
              message1={"Shopping Cart"} 
              message2={`You have ${data.me.cart.length} ${data.me.cart.length === 0 || data.me.cart.length === 1 ? "item": "items"} in your cart`}
            />
            {
              data.me.cart.length === 0 ? 
                <div className="center">
                  <lottie-player
                    src="https://assets2.lottiefiles.com/temp/lf20_jzqS18.json"  
                    background="transparent"  
                    speed="1"  
                    style={{ width: "250px", height: "250px"}}
                    loop  
                    autoplay>
                  </lottie-player>
                </div>
              : 
              <>
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
                    data.me.cart.map(cartItem =>  {
                      if (!cartItem.item) return  <tr>
                      <td><RemoveFromCart id={cartItem.id}/></td>
                        <td colSpan={4} style={{fontSize: 20}}>This item has been removed</td>
                      </tr> 
                      return (
                      <tr key={cartItem.id}>
                        <td><RemoveFromCart id={cartItem.id}/></td>
                        <td>
                          <img src={cartItem.item.image1} />
                        </td>
                        <td> {formatLetters(cartItem.item.itemName)} </td>
                        <td>
                          <div className="cell-content-wrapper">
                            <DecreaseItem id={cartItem.item.id} /> <button>{cartItem.quantity}</button> <IncreaseItem id={cartItem.item.id} />
                          </div>
                        </td>
                        <td>{formatMoney(cartItem.item.newPrice)}</td>
                    </tr>
                    )})
                  }
                </tbody>
              </Table>
              <Checkout cartItems={data.me.cart}/>
              </>
            }
            </>
          )
        }
      }
    </User>
  )
}

export default Cart;
