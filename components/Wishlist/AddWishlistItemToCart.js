import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../User/User';

const ADD_WISHLIST_ITEM_TO_CART_MUTATION = gql`
  mutation moveItemToCart($id: ID!, $wishListItemId: ID!) {
    moveItemToCart(id: $id, wishListItemId: $wishListItemId) {
      id 
    }
  }
`;

const AddWishListItemToCart = ({ id, wishlistItem }) => {
  const [moveItemToCart, { loading }] = useMutation(
    ADD_WISHLIST_ITEM_TO_CART_MUTATION, { 
      variables: { id, wishListItemId: wishlistItem.id },
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });

  return (
    <button 
      title="Add to Cart"
      onClick={() => {
        moveItemToCart().catch(err => alert(err.toString()));
      }}
      disabled={loading}
    >
    {
      loading ? (
        <i className="fas fa-circle-notch fa-spin icon"></i>
      ) 
        :
      (
        <i>Add To Cart</i>
      )
    }
    </button>
  )
}

export default AddWishListItemToCart;
