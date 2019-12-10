import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';

import { ALL_ITEMS_QUERY } from './Manage';
import formatMoney from '../../lib/formatMoney';
import { IconStyle } from './ManageStyles';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const StoreItem = ({ id, itemName, image1, newPrice, router, admin }) => {
  return (
    <tr>
      <td>
        <img src={image1} alt={itemName}/>
      </td>
      <td>{itemName}</td>
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
        <Mutation 
          mutation={DELETE_ITEM_MUTATION}
          refetchQueries={[{ query: ALL_ITEMS_QUERY }]}
          variables={{
            id
          }}
        >
        {
          (deleteItem) => (
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
          )
        }
        </Mutation>
    </tr>
  ) 
}

export default withRouter(StoreItem);