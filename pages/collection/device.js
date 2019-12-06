import React from 'react';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import Collection from '../../components/Collection/Collection';
import { perPage } from '../../configs';
import Pagination from '../../components/Pagination/Pagination';

const DEVICE_COLLECTION_QUERY = gql`
query {
    items(where: { category: DEVICE }, orderBy: createdAt_DESC) {
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
    currentItem(where: { category: DEVICE }){
      id
    }
  }
`;

const PAGINATION_QUERY = gql`
query PAGINATION_QUERY {
  itemsConnection(where: {
    category: DEVICE
  }) {
    aggregate {
      count
    }
  }
}
`;

const Device = ({ query, router}) => {

  return (
    <>
      <Collection
        collectionName="Device"
        collectionQuery={DEVICE_COLLECTION_QUERY}
        spacing="200px"
       />

      <Pagination
        PAGINATION_QUERY={PAGINATION_QUERY}
        page={parseFloat(query.page) || 1}
        pathname={router.pathname}
        perPage={perPage}
        collection="Device" 
      />
    </>
  );
}

export default withRouter(Device);
