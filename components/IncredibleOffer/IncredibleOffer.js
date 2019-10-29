import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import IncredibleOfferStyles from './IncredibleOfferStyles';
import IncredibleOfferButtonLink from './IncredibleOfferButtonLink';
import formatMoney from '../../lib/formatMoney';

const IncredibleOffer = ({ collectionQuery, pageLink, collectionName }) => {
  const { data, loading, error } = useQuery(collectionQuery);

  if (loading) return <p>Loading</p>;

  return (
    <>
    <IncredibleOfferStyles>
        {
          data.items.map(item => (
            <div className="card" key={item.id}>
              <div className="image-box">
                <img src={item.image1} alt={item.itemName} />
              </div>
              <div className="content">
                <div className="discount-percent">{item.discountPercent}% discount</div>
                <div className="item-name">{item.itemName}</div>
                <div className="amount"><s>{formatMoney(item.amount)}</s></div>
                <div className="discount-amount">{formatMoney(item.newPrice)}</div>
              </div>
            </div>
          ))
        }
    </IncredibleOfferStyles>
    <IncredibleOfferButtonLink />
    </>
  );
} 

export default IncredibleOffer;
