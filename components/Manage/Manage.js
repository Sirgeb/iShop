import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client'
import { withRouter } from 'next/router';

import { useUserData } from '../../hooks/AppContext';
import { perPage } from '../../configs';
import PageInfo from '../PageInfo/PageInfo';
import Pagination from '../Pagination/Pagination';
import Table from '../styles/Table';
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
  const { data } = useUserData();
  const { data: itemsData, loading } = useQuery(ALL_ITEMS_QUERY, {  
    fetchPolicy: 'network-only',
    variables: {
      skip: page * perPage - perPage,
    }
  });

  useEffect(() => {
    if (itemsData !== undefined) {
      setItems(itemsData.items);
    }
  }, [itemsData, loading])

  if (data.me === undefined) return null;
  if (loading) return <Spinner spacing="200px" />;
  
  const admin = data.me.permissions.length > 1;

  return <>
    <Head>
      <title>iShop | Manage </title>
    </Head>
    <PageInfo 
      message1="Manage" 
      message2={`   
        ${!admin ? 
          `Sorry, you don't have permission to manage store`
          : 
          `${itemsData.itemsInStore.length} 
          ${itemsData.itemsInStore.length === 0 || itemsData.itemsInStore.length === 1 ?
          "item": "items"} in  store`}`} 
    />

    <AddItem>
      <Link href={`${!admin ? "#" : "/add"}`}>
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
                {searchResult.map(item => <StoreItem key={item.id} admin={admin} { ...item } />)}
            </>
          : 
            <>
                {items.map(item => <StoreItem key={item.id} admin={admin} { ...item } />)}
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
          collection="Items"
        />
    }
  </>
}

export { ALL_ITEMS_QUERY };
export default withRouter(Manage);
