import React from 'react';
import { useMutation, gql } from '@apollo/client';
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
  const [increaseItem, { loading }] = useMutation(INCREASE_ITEM_MUTATION, { variables: { id },  refetchQueries: [{ query: CURRENT_USER_QUERY }] })

    return (
      <button 
        disabled={loading}
        onClick={() => increaseItem().catch(err => alert(err.toString()))}
        >
        {
          loading ? <i className="fas fa-circle-notch fa-spin"></i> : "+"
        }
      </button>
    )
}

export default IncreaseItem;
