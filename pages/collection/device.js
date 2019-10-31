import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../components/Collection/Collection';
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

const Device = () => {

  return (
    <>
      <Collection
        collectionName="Device"
        collectionQuery={DEVICE_COLLECTION_QUERY}
        spacing="200px"
       />
      <Pagination />
    </>
  );
}

export default Device;
