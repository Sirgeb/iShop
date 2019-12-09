import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withRouter } from 'next/router';

import { perPage } from '../../configs';
import PageInfo from '../PageInfo/PageInfo';
import Pagination from '../Pagination/Pagination';
import Table from '../styles/Table';
import User from '../User/User';
import SearchItem from './SearchItem';
import { AddItem } from './ManageStyles';
import Spinner from '../Spinner/Spinner';
import StoreItem from './StoreItem';

const ALL_ITEMS_QUERY = gql`
  query ($skip: Int = 0, $first: Int = ${perPage}){
    items (first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      image1
      newPrice
    }

    itemsInStore {
      id
    }
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Manage = ({ page, router }) => {

  const [items, setItems] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
    <User> 
    {
      ({ data, loading }) => {
        if (loading) return null;

        const me = data.me;

        return <Query
          query={ALL_ITEMS_QUERY}
          fetchPolicy="network-only"
          variables={{
            skip: page * perPage - perPage,
          }}
        > 
        {
          ({ data, loading }) => {
            if (loading) return <Spinner spacing="200px" />;
            setItems(data.items);

            return <>
              <Head>
                <title>iShop | Manage </title>
              </Head>
              <PageInfo 
                message1="Manage" 
                message2={`${me ? "Sorry, You don't have privilegde to manage store": "item in Store"}`} 
              />
      
              <AddItem>
                <Link href="/add">
                  <a><i className="fas fa-plus"></i> Add an Item</a>
                </Link>
              </AddItem>
      
              <SearchItem setItems={(items) => setSearchResult(items)}/>
      
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Update</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    searchResult.length !== 0 ? 
                      <>
                          {searchResult.map(item => <StoreItem key={item.id} { ...item } />)}
                      </>
                    : 
                      <>
                          {items.map(item => <StoreItem key={item.id} { ...item } />)}
                      </>
                  }
                </tbody>
              </Table>
              {
                searchResult && <div style={{ marginBottom: 40 }} />
              }
              { 
                (searchResult.length === 0 && !loading) && 
                  <Pagination 
                    PAGINATION_QUERY={PAGINATION_QUERY} 
                    page={page} 
                    pathname={router.pathname}
                    perPage={perPage}
                  />
              }
            </>
          }
        }
        </Query>
       
      }
    }
    </User>
    </>
  )
}

export default withRouter(Manage);
