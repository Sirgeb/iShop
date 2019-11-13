import React from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User/User';
import gql from 'graphql-tag';

import formatError from '../../lib/formatError';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id 
      quantity
    }
  }
`;


const AddToCart = ({ id }) => {
  
  return (
    <Mutation 
        mutation={ADD_TO_CART_MUTATION} 
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        variables={{
          id
        }}
        >
      {
        (addToCart, { loading }) => (
          <button 
            title="Add to Cart"
            className="add-to-cart btn"
            onClick={() => {
              addToCart().catch(err => alert(formatError(err.message)));
            }}
            disabled={loading}
          >Add{loading ? "ing " : " "}To Cart</button>
        )
      }
    </Mutation>
  );
}

export default AddToCart;
