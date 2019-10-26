import React from 'react';
import CollectionStyles from './CollectionStyles';
import Link from 'next/link';

const Collection = ({ collectionName, pageLink }) => {

  return ( 
    <CollectionStyles>
        <div className="collection-header">
          <div className="collection-info">{ collectionName } | 5 Bags For You</div>
          <button> 
            <Link href={pageLink}>
              <a>
              See All &#8594;
              </a>
            </Link>
          </button>
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
