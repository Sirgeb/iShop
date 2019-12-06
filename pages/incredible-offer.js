import React from 'react';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import Pagination from '../components/Pagination/Pagination';
import IncredibleOfferComponent from '../components/IncredibleOffer/IncredibleOffer';

const perPage = 4;

const INCREDIBLE_OFFER_QUERY = gql`
  query ($skip: Int = 0, $first: Int = ${perPage}){
    items(where: {
      discountPercent_gt: 15
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
    itemsInStore(where: {
      discountPercent_gt: 15
    }) {
      id
    }
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection(where: {
      discountPercent_gt: 15
    }) {
      aggregate {
        count
      }
    }
  }
`;

const IncredibleOffer = ({ query, router }) => {
  return (
    <>
      <IncredibleOfferComponent
        collectionName="Incredible Offer"
        collectionQuery={INCREDIBLE_OFFER_QUERY}
        variables={{
          skip: parseFloat(query.page) * perPage - perPage,
        }}
        onCollectionPreview={false}
        spacing="200px"
      />
      
      <Pagination 
        PAGINATION_QUERY={PAGINATION_QUERY}
        page={parseFloat(query.page) || 1}
        pathname={router.pathname}
        perPage={perPage}
        collection="Incredible Offer"
      />
    </>
  )
}

export default withRouter(IncredibleOffer);
