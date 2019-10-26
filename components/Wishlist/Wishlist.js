import React from 'react';
import WishlistStyles from './WishlistStyles';

const Wishlist = () => {

  return ( 
    <WishlistStyles>
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
                  <button className="add-to-cart btn">Add to Cart</button>
                </div>
              <div className="bottom">
                  <span className="discount-percent">-3%</span>
              </div>
            </div>
          </div>
        </div>
    </WishlistStyles>
  );
}

export default Wishlist;
