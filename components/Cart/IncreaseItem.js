import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../User/User';

const INCREASE_ITEM_MUTATION = gql`
  mutation increaseItem($id: ID!) {
    increaseItem(id: $id) {
      id 
      quantity
    }
  }
`;

const IncreaseItem = ({ id }) => {

  return (
    <Mutation 
          mutation={INCREASE_ITEM_MUTATION} 
          variables={{id }} 
          refetchQueries={[{ query: CURRENT_USER_QUERY}]}
      >
        {
          (increaseItem, { loading }) => (
            <button 
              disabled={loading}
              onClick={() => increaseItem().catch(err => alert(err.message))}
              >
              {
                loading ? <i className="fas fa-circle-notch fa-spin"></i> : "+"
              }
            </button>
          )
        }
    </Mutation>
  )
}

export default IncreaseItem;
