import React from 'react';
import formatMoney from '../../../lib/formatMoney';

import CollectionCardStyles from './CollectionCardStyles';

const CollectionCard = ({ itemName, image1, newPrice, amount, discountPercent, onCollectionPreview }) => {

  return (
    <CollectionCardStyles onCollectionPreview={onCollectionPreview}>
        <div className="card-image-and-amount-wrapper">
            <div className="img-box">
                <img src={image1} alt={itemName} />
            </div>
            <div className="amount">
                <span>{formatMoney(newPrice)}</span>&nbsp; <s> {formatMoney(amount)} </s>
            </div>
        </div>
        <div className="wrapper">
          <div className="top">
              <div className="item-name">
                {itemName}
              </div>
              <button className="add-to-wishlist btn"><i className="fas fa-heart icon active" ></i></button>
              <button className="add-to-cart btn">Add to Cart</button>
            </div>
          <div className="bottom">
              <span className="discount-percent">-{discountPercent}%</span>
          </div>
        </div>
    </CollectionCardStyles>
  )
}

export default CollectionCard;
