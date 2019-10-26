import React from 'react';
import CollectionStyles from '../CollectionPreview/CollectionStyles';

const Collection = () => {

  return ( 
    <CollectionStyles>
        <div className="collection-items">

          <div className="collection-card">
            <div className="card-image-and-amount-wrapper">
                <div className="img-box">
                    <img src="../static/images/items/2.jpg" alt="" />
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
