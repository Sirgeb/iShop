import React from 'react';
import { useMutation, gql } from '@apollo/client'
import { CURRENT_USER_QUERY } from '../User/User';

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
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, { variables: { id }, refetchQueries: [{ query: CURRENT_USER_QUERY }]  })

    return (
      <button 
        title="Add to Cart"
        className="add-to-cart btn"
        onClick={() => {
          addToCart().catch(err => alert(formatError(err.toString())));
        }}
        disabled={loading}
      >Add{loading ? "ing " : " "}To Cart</button>
    )
}

export default AddToCart;
