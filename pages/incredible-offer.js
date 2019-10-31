import React from 'react';
import gql from 'graphql-tag';

import Pagination from '../components/Pagination/Pagination';
import IncredibleOfferComponent from '../components/IncredibleOffer/IncredibleOffer';

const INCREDIBLE_OFFER_QUERY = gql`
  query {
    items(where: {
      discountPercent_gt: 15
    } orderBy: createdAt_DESC) {
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
  }
`;

const IncredibleOffer = () => {

  return (
    <>
      <IncredibleOfferComponent
        collectionName="Incredible Offer"
        collectionQuery={INCREDIBLE_OFFER_QUERY}
        onCollectionPreview={false}
      />
      
      <Pagination />
    </>
  )
}

export default IncredibleOffer;
