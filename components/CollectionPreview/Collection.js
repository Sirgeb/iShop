import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import CollectionStyles from './CollectionStyles';
import Link from 'next/link';

const Collection = ({ collectionName, pageLink, collectionQuery }) => {


  const { data, loading, error } = useQuery(collectionQuery);

  if (loading) {
    return <p>Loading</p>
  }

  return ( 
    <CollectionStyles>
        <div className="collection-header">
          <div className="collection-info">{ collectionName } | {data.currentItem.length} { collectionName } For You</div>
          <button> 
            <Link href={pageLink}>
              <a>
              See All &#8594;
              </a>
            </Link>
          </button>
        </div>

        <div className="collection-items">
         {
           data.items.map(item => (
            <div className="collection-card" key={item.id}>
            <div className="card-image-and-amount-wrapper">
                <div className="img-box">
                    <img src={item.image1} alt={item.itemName} />
                </div>
                <div className="amount">
                    <span>${item.newPrice}</span>&nbsp; <s> ${item.amount} </s>
                </div>
            </div>
            <div className="wrapper">
              <div className="top">
                  <div className="item-name">
                    {item.itemName}
                  </div>
                  <button className="add-to-wishlist btn"><i className="fas fa-heart icon active" ></i></button>
                  <button className="add-to-cart btn">Add to Cart</button>
                </div>
              <div className="bottom">
                  <span className="discount-percent">-{item.discountPercent}%</span>
              </div>
            </div>
          </div>
           ))
         }
        </div>
    </CollectionStyles>
  );
}

export default Collection;
