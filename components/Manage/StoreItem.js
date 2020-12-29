import React from 'react';
import { gql, useMutation } from '@apollo/client'
import Link from 'next/link';
import Router, { withRouter } from 'next/router';

import { ALL_ITEMS_QUERY } from './Manage';
import formatMoney from '../../lib/formatMoney';
import formatLetters from '../../lib/formatLetters';
import { IconStyle } from './ManageStyles';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const StoreItem = ({ id, itemName, image1, newPrice, router, admin }) => {
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, { 
    variables: { id }, refetchQueries: [{ query: ALL_ITEMS_QUERY}] 
  });

  return (
    <tr>
      <td>
        <img src={image1} alt={itemName}/>
      </td>
      <td>{formatLetters(itemName)}</td>
      <td>{formatMoney(newPrice)}</td>
      <td>
        <IconStyle>
          {
            admin && (
              <Link 
                  href={{
                  pathname: "/update",
                  query: {
                    id
                  }
                }}>
                  <a>
                    <i className="fas fa-pen-square icon update" title="Update"></i>
                  </a>
              </Link>
            )
          }

          {
            !admin && (
              <a onClick={() => alert("Sorry, you don't have permission to update")}>
                <i className="fas fa-pen-square icon update" title="Update"></i>
              </a>
            )
          }

        </IconStyle>
      </td>
      <td>
        <IconStyle>
          {
            admin && (
              <i 
                className="fas fa-trash-alt icon remove" 
                title="Remove"
                onClick={async () => {
                    if (confirm('Click OK to delete this item?')) {
                      await deleteItem().catch(err => alert(err.message));
                      Router.push({
                        pathname: router.pathname,
                      });
                    }
                }}
              ></i>
            )
          }
          
          {
            !admin && (
              <i 
                className="fas fa-trash-alt icon remove" 
                title="Remove"
                onClick={() =>alert("Sorry, You don't have permission to delete")}
              ></i>
            )
          }
        </IconStyle>
      </td>
    </tr>
  ) 
}

export default withRouter(StoreItem);