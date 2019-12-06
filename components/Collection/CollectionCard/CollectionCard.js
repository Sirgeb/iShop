import React from 'react';
import Link from 'next/link';
import formatMoney from '../../../lib/formatMoney';
import AddToCart from '../../Cart/AddToCart';
import AddToWishlist from '../../Wishlist/AddToWishlist';

import CollectionCardStyles from './CollectionCardStyles';

const CollectionCard = ({id, itemName, image1, newPrice, amount, discountPercent, onCollectionPreview, me }) => {
  return (
    <CollectionCardStyles hide={onCollectionPreview}>
        <div className="card-image-and-amount-wrapper">
          <Link href={{ pathname: '/item', query: {id} }}>
            <a>
              <div className="img-box">
                  <img src={image1} alt={itemName} />
              </div>
            </a>
          </Link>
            <div className="amount">
                <span>{formatMoney(newPrice)}</span>&nbsp; <s> {formatMoney(amount)} </s>
            </div>
        </div>
        <div className="wrapper">
          <div className="top">
              <div className="item-name">
                {itemName}
              </div>
              <AddToWishlist id={id} wishlist={me && me.wishlist} />
              <AddToCart id={id}/>
            </div>
          <div className="bottom">
              <span className="discount-percent">-{discountPercent}%</span>
          </div>
        </div>
    </CollectionCardStyles>
  )
}

export default CollectionCard;
