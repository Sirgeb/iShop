import React from 'react';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client'
import Link from 'next/link';

import { useUserData } from '../../hooks/AppContext';
import ItemStyles from './ItemStyles';
import PageInfo from '../PageInfo/PageInfo';
import Spinner from '../Spinner/Spinner';
import formatMoney from '../../lib/formatMoney';
import formatLetters from '../../lib/formatLetters';
import AddToCart from '../Cart/AddToCart';
import AddToWishlist from '../Wishlist/AddToWishlist';

const ITEM_QUERY = gql`
  query ITEM_QUERY($id: ID!) {
    item(where: { id: $id}) {
      id
      itemName
      image1
      image2
      newPrice
      description
    }
  }
`;

const Item = ({ id: itemId }) => {
  const { data } = useUserData();
  const { data: itemData, loading } = useQuery(ITEM_QUERY, { variables: { id: itemId } });

  if (data === undefined) return null;
  if (loading) return <Spinner spacing="200px"/>;
  
  const { id, description, image1, image2, itemName, newPrice } = itemData.item;
  const me = data.me;

  return (
    <>
    <Head>
      <title>iShop | {formatLetters(itemName)}</title>
    </Head>
    <PageInfo message1={formatLetters(itemName)} message2="" />
      <ItemStyles>
        <div className="item">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={image1} alt={itemName} />
              </div>
              <div className="flip-card-back">
                <img src={image2 ? image2 : image1} alt={image2 && itemName} />
              </div>
            </div>
          </div>
            <ul>
              <li><button>{formatMoney(newPrice)}</button></li>
              <li><AddToCart id={id} /></li>
              <li><AddToWishlist id={id} wishlist={me && me.wishlist} /></li>
              <li>
                <Link href="/cart">
                  <a>
                    <button disabled={!me && true}>Checkout →</button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        <div className="content">
          <h2>Product Description</h2>
          <p>
            {description}
          </p>
        </div>
      </ItemStyles>
    </>
  )
}

export default Item;
