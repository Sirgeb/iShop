import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../User/User';

const REMOVE_FROM_CART_MUTAION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  border: 0;
  &:hover {
    color: teal;
    cursor: pointer;
  }
`;

const RemoveFromCart = ({ id }) => {

  // This gets called as soon as we get a response back from the server after a mutation has been performed
    function update(cache, payload) {
    // first read the cache
    const data = cache.readQuery({
      query: CURRENT_USER_QUERY
    });
    // remove that item
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    // write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });

  }

    return (
      <Mutation 
          mutation={REMOVE_FROM_CART_MUTAION} 
          variables={{id}} 
          update={update} 
          optimisticResponse={{
            __typename: 'Mutation',
            removeFromCart: {
              __typename: 'CartItem',
              id
            }
          }}
          >
        {
          (removeFromCart, { loading, error }) => (
            <BigButton 
              title="Remove Item"
              disabled={loading}
              onClick={
                () => {
                  removeFromCart().catch(err => alert(err.message));
                }
              }
              >
            &times;</BigButton>
          )
        }
    </Mutation>
  )
}

export default RemoveFromCart;
