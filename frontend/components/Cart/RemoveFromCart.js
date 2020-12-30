import React from 'react';
import { useMutation, gql } from '@apollo/client';
import styled from 'styled-components';
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
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTAION)

  return (
    <BigButton 
      title="Remove Item"
      disabled={loading}
      onClick={
        () => {
          removeFromCart({ 
            variables: { id }, 
            refetchQueries: [{ query: CURRENT_USER_QUERY }]
          }).catch(err => alert(err.toString()));
        }
      }
      >{ loading ?<i className="fas fa-circle-notch fa-spin"></i> : <>&times;</>}</BigButton>
  )
}

export default RemoveFromCart;
