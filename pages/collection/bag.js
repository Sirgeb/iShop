import React from 'react';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import Collection from '../../components/Collection/Collection';
import { perPage } from '../../configs';
import Pagination from '../../components/Pagination/Pagination';

const BAG_COLLECTION_QUERY = gql`
  query ($skip: Int = 0, $first: Int = ${perPage}){
    items(where: {
      category: BAG
    }, first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      category
      image1
      image2
      amount
      newPrice
      description
    }
    currentItem(where: { category: BAG }){
      id
    }
  }
`;

const PAGINATION_QUERY = gql`
query PAGINATION_QUERY {
  itemsConnection(where: {
    category: BAG
  }) {
    aggregate {
      count
    }
  }
}
`;

const Bag = ({ query, router }) => {

  return (
    <>
      <Collection 
        collectionName="Bag"
        collectionQuery={BAG_COLLECTION_QUERY}
        variables={{
          skip: parseFloat(query.page) * perPage - perPage,
        }}
        spacing="200px"
      />
      
      <Pagination 
        PAGINATION_QUERY={PAGINATION_QUERY}
        page={parseFloat(query.page) || 1}
        pathname={router.pathname}
        perPage={perPage}
        collection="Bag"
      />
    </>
  );
}

export default withRouter(Bag);
