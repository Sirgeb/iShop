import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const WRIST_WATCH_COLLECTION_QUERY = gql`
query {
    items(where: { category: WRISTWATCH }, first: 5, orderBy: createdAt_DESC) {
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
    currentItem(where: { category: WRISTWATCH }){
      id
    }
  }
`;

const WristWatch = () => {

  return (
    <>
      <Collection 
        collectionName="Wrist Watch"
        collectionQuery={WRIST_WATCH_COLLECTION_QUERY}
      />
      <Pagination />
    </>
  );
}

export default WristWatch;
