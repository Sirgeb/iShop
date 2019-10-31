import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const SHOE_COLLECTION_QUERY = gql`
query {
    items(where: { category: SHOE }, orderBy: createdAt_DESC) {
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
    currentItem(where: { category: SHOE }){
      id
    }
  }
`;

const Shoe = () => {

  return (
    <>
      <Collection 
        collectionName="Shoe"
        collectionQuery={SHOE_COLLECTION_QUERY}
        spacing="200px"
      />
      <Pagination />
    </>
  );
}

export default Shoe;
