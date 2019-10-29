import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const SHIRT_COLLECTION_QUERY = gql`
query {
    items(where: { category: SHIRT }, orderBy: createdAt_DESC) {
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
    currentItem(where: { category: SHIRT }){
      id
    }
  }
`;

const Shirt = () => {

  return (
    <>
      <Collection 
        collectionName="Shirt"
        collectionQuery={SHIRT_COLLECTION_QUERY}
      />
      <Pagination />
    </>
  );
}

export default Shirt;
