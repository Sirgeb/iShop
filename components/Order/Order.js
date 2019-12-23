import React from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import gql from 'graphql-tag';
import Head from 'next/head';

import formatMoney from '../../lib/formatMoney';
import PageInfo from '../PageInfo/PageInfo';
import Spinner from '../Spinner/Spinner';

import OrderStyles from './OrderStyles';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id 
      total 
      createdAt 
      items {
        id 
        itemName
        newPrice 
        description
        quantity 
        image1
      }
    }
  }
`;

const Order = () => {

  return (
    <Query query={USER_ORDERS_QUERY}>
      {
        ({ data, loading }) => {
          if (loading) return <Spinner spacing="200px"/>

          return (
            <>
            <Head>
              <title>iShop | Orders </title>
            </Head>

            <PageInfo 
              message1="Orders"
              message2={`You have made ${data.orders.length} ${data.orders.length === 0 || data.orders.length === 1 ? 'Order' : 'Orders' }`}
            />
            {
              data.orders.length === 0 ? 
              <div className="center">
                <lottie-player
                    src="https://assets8.lottiefiles.com/temp/lf20_Celp8h.json"  
                    background="transparent"  
                    speed="1"  
                    style={{width: "250px", height: "250px"}}  
                    loop  
                    autoplay>
                </lottie-player>
              </div>
              : 
              <OrderStyles>
                {
                  data.orders.map(order => (
                    <div className="accordion-wrapper" key={order.id}>
                    <input id={order.id} name="myaccordion" type="checkbox" />
                    <label htmlFor={order.id}>
                    <strong>•</strong> {moment(order.createdAt).add(24, 'hours').format('LLL')}
                    </label>
                    <div className="insidecontainer">
                      <p>  
                        <span> Order ID: {order.id} </span>
                        <span> No of Items: {order.items.length} </span>
                        <span> Grand Total: {formatMoney(order.total)} </span>
                      </p>
                      <div className="items-wrapper">
                          {
                            order.items.map(item => (
                              <div className="item" key={item.id}>
                                  <img src={item.image1} alt={item.itemName} width="100" height="100" />
                                  <div className="item-details">
                                    <span>Name: {item.itemName}</span>
                                    <span>Quantity: {item.quantity}</span>
                                  </div>
                                  <div className="item-details">
                                    <span>| Each: {formatMoney(item.newPrice)}</span>
                                    <span>| Sub Total: {formatMoney(item.newPrice * item.quantity)}</span>
                                  </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
            </OrderStyles>
            }
            </>
          )
        }
      }
    </Query>
  )
};

export default Order;
