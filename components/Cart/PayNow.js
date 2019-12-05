import React from 'react';
import Router from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import calcTotalPrice from '../../lib/calcTotalPrice';
import User, { CURRENT_USER_QUERY } from '../User/User';

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

class PayNow extends React.Component {
  onToken = async (res, createOrder) => {
    NProgress.start();
    // manually call the mutation once we have the stripe token
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

  render() {
    return (
      <User>
        {
          ({data: { me }}) => (
            <Mutation 
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[{ query: CURRENT_USER_QUERY }, {query: USER_ORDERS_QUERY}]}
              >
              {
                (createOrder) => (
                  <StripeCheckout
                    amount={calcTotalPrice(me.cart)}
                    name="iShop"
                    description={`Order of ${totalItems(me.cart)} items!`}
                    image="/static/images/ishop-logo.png"
                    stripeKey="pk_test_PpqRppBfT0qweVIJGKfqpqvp"
                    currency="USD"
                    email={me.email}
                    token={res => this.onToken(res, createOrder)}
                  >
                    {this.props.children}
                  </StripeCheckout>
              )
            }
          </Mutation>
          )
        }
      </User>
    )
  }
}

export default PayNow;
