import React from 'react';
import { useMutation, gql } from '@apollo/client'
import { CURRENT_USER_QUERY } from '../User/User';

const DECREASE_ITEM_MUTATION = gql`
  mutation decreaseItem($id: ID!) {
    decreaseItem(id: $id) {
      id 
      quantity
    }
  }
`;

const DecreaseItem = ({ id }) => {
  const [decreaseItem, { loading }] = useMutation(DECREASE_ITEM_MUTATION, { variables: { id }, refetchQueries: [{ query: CURRENT_USER_QUERY }]})

  return (
    <button 
      disabled={loading}
      onClick={ () => decreaseItem().catch(err => alert(err.toString()))}
      >
      {
        loading ? <i className="fas fa-circle-notch fa-spin"></i> : "-"
      }
    </button>
  )
}

export default DecreaseItem;
