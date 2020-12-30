import { gql } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      username
      permissions
      cart {
         id
         quantity
         item {
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
      wishlist {
        id
        item {
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
    }
  }
`;

export { CURRENT_USER_QUERY };
