import { gql } from '@apollo/client';
import { withRouter } from 'next/router';

import Collection from '../../components/Collection/Collection';
import { perPage } from '../../configs';
import Pagination from '../../components/Pagination/Pagination';

const SHOE_COLLECTION_QUERY = gql`
  query ($skip: Int = 0, $first: Int = ${perPage}){
    items(where: {
      category: SHOE
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
    currentItem(where: { category: SHOE }){
      id
    }
  }
`;

const PAGINATION_QUERY = gql`
query PAGINATION_QUERY {
  itemsConnection(where: {
    category: SHOE
  }) {
    aggregate {
      count
    }
  }
}
`;

const Shoe = ({ query, router }) => {

  return (
    <>
      <Collection 
        collectionName="Shoe"
        collectionQuery={SHOE_COLLECTION_QUERY}
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
        collection="Shoe"
      />
    </>
  );
}

export default withRouter(Shoe);
