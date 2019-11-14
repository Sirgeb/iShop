import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../User/User';

const ADD_WISHLIST_ITEM_TO_CART_MUTATION = gql`
  mutation moveItemToCart($id: ID!, $wishListItemId: ID!) {
    moveItemToCart(id: $id, wishListItemId: $wishListItemId) {
      id 
    }
  }
`;

const AddWishListItemToCart = ({ id, wishlistItem }) => {

    return (
            <Mutation 
              mutation={ADD_WISHLIST_ITEM_TO_CART_MUTATION} 
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
              variables={{
                id,
                wishListItemId: wishlistItem.id
              }}
              >
            {
              (moveItemToCart, { loading }) => (
                <button 
                  title="Add to Cart"
                  onClick={() => {
                    moveItemToCart().catch(err => alert(err.message));
                  }}
                  disabled={loading}
                >
                {
                  loading ? 
                    (<i className="fas fa-circle-notch fa-spin icon"></i>) 
                    :
                    (<i>Add To Cart</i>)
                }
                
                </button>
              )
            }
        </Mutation>
    )
}

export default AddWishListItemToCart;
