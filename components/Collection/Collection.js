import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import CollectionStyles from './CollectionStyles';

const ALL_BAGS_QUERY = gql`
  query {
    items{
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

const Collection = () => {
  const { data, loading, error } = useQuery(ALL_BAGS_QUERY);

  if (!loading) {
    console.log(data);
  }

  return ( 
    <CollectionStyles>
        <div className="collection-header">
          <div className="collection-info">Bag | 5 Bags For You</div>
          <button>See All &#8594;</button>
        </div>

        <div className="collection-items">

          <div className="collection-card">
            <div className="card-image-and-amount-wrapper">
                <div className="img-box">
                    <img src="./static/images/items/2.jpg" alt="" />
                </div>
                <div className="amount">
                    <span>$48.50</span>&nbsp; <s> $50 </s>
                </div>
            </div>
            <div className="wrapper">
              <div className="top">
                  <div className="item-name">
                    Long Sleeve
                  </div>
                  <button className="add-to-wishlist btn"><i className="fas fa-heart icon active" ></i></button>
                  <button className="add-to-cart btn">Add to Cart</button>
                </div>
              <div className="bottom">
                  <span className="discount-percent">-3%</span>
              </div>
            </div>
          </div>
        </div>
    </CollectionStyles>
  );
}
export default Collection;
