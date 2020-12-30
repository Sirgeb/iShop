import React from 'react';
import { ApolloConsumer, gql } from '@apollo/client';

import { CURRENT_USER_QUERY } from '../User/User';
import SearchItemStyles from './SearchItemStyles';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    searchItems(where: { 
      itemName_contains: $searchTerm
    }) {
      id
      itemName
      image1
      newPrice
    }
  }
`;

const SearchItem = ({ setItems }) => {

    async function onChange(e, client) {
      let keyword = e.target.value;

      if (keyword.length === 0 || keyword === null || keyword === undefined) {
        setItems([]);
      }

      const res = await client.query({
        query: SEARCH_ITEMS_QUERY,
        variables: { searchTerm: keyword},
        refetchQueries: [{ query: CURRENT_USER_QUERY}]
      });

      setItems(res.data.searchItems);
    }

  return (
    <SearchItemStyles>
      <ApolloConsumer>
        {(client) => (
          <input 
            type="text" 
            placeholder="Search for an Item ..."
            type="search" 
            name="search" 
            autoComplete="off" 
            onChange={
              (e) => {
                e.persist();
                onChange(e, client);
              }
            } 
          />
        )}
      </ApolloConsumer>
    </SearchItemStyles> 
  )
}

export default SearchItem;