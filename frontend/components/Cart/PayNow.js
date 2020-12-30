import React from 'react';
import Router from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import NProgress from 'nprogress';
import { useMutation, gql } from '@apollo/client'
import calcTotalPrice from '../../lib/calcTotalPrice';
import { CURRENT_USER_QUERY } from '../User/User';
import { useUserData } from '../../hooks/AppContext';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id 
      charge 
      total 
      items {
        id 
        itemName
      }
    }
  }
`;

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

function totalItems(cart) {
  return cart.reduce((tally, CartItem) => tally + CartItem.quantity, 0);
}

const PayNow = ({ children }) => {
  const [createOrder] = useMutation(CREATE_ORDER_MUTATION, { refetchQueries: [{ query: CURRENT_USER_QUERY }, {query: USER_ORDERS_QUERY}] });
  const { data: { me } } = useUserData();

  const onToken = async (res) => {
    NProgress.start();
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    }).catch(err => {
      alert(err.message);
    });
    
    Router.push({
      pathname: '/orders',
      query: { id: order.data.createOrder.id },
    });
  }

  return (
    <StripeCheckout
      amount={calcTotalPrice(me.cart)}
      name="iShop"
      description={`Order of ${totalItems(me.cart)} items!`}
      image="/static/images/ishop-logo.png"
      stripeKey="pk_test_PpqRppBfT0qweVIJGKfqpqvp"
      currency="USD"
      email={me.email}
      token={res => onToken(res)}
    >
      {children}
    </StripeCheckout>
  )
}

export default PayNow;
