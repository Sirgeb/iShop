import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const BAG_COLLECTION_QUERY = gql`
query {
    items(where: { category: BAG }, orderBy: createdAt_DESC) {
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

const Bag = () => {

  return (
    <>
      <Collection 
        collectionName="Bag"
        collectionQuery={BAG_COLLECTION_QUERY}
      />
      <Pagination />
    </>
  );
}

export default Bag;
