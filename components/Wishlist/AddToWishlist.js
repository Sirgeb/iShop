import React from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User/User';
import gql from 'graphql-tag';
import formatError from '../../lib/formatError';

const ADD_TO_WISHLIST_MUTATION = gql`
  mutation addToWishList($id: ID!) {
    addToWishList(id: $id) {
      id 
    }
  }
`;

const AddToWishList = ({ id, wishlist }) => {
  let active = false;

  return (
    <Mutation 
      mutation={ADD_TO_WISHLIST_MUTATION} 
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      variables={{ id }}>
      {
        (addToWishList, { loading }) => (
          <button 
            title="Add To Wishlist"
            className={`add-to-wishlist btn`}
            onClick={() => {
              return addToWishList().catch(err => alert(formatError(err.message)));
            }}
            disabled={loading}
          > 
          {
            wishlist && (
              <>
                { 
                   (wishlist.map(wishListItem => {
                    if (wishListItem.item.id.includes(id)) {
                      return  (
                        <div key={wishListItem.item.id}>
                          {
                            active = true
                          }
                          {
                            loading ? 
                             (<i className="fas fa-circle-notch fa-spin icon"></i>) 
                              :
                             (<i className="fas fa-heart icon active"></i>) 
                          }
                        </div>
                      )
                    } 
                  })) 
                }
              </>
            )  
          }
          {
            !active && (
              loading ? <i className="fas fa-circle-notch fa-spin icon"></i> : 
              <i className="fas fa-heart icon" key={id}></i>
            ) 
          }
          </button>
        )
      }
    </Mutation>
  )
}

export default AddToWishList;
