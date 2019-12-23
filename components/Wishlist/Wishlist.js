import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import PageInfo from '../PageInfo/PageInfo';
import User from '../User/User';
import formatMoney from '../../lib/formatMoney';
import Spinner from '../Spinner/Spinner';
import AddWishlistItemToCart from '../Wishlist/AddWishlistItemToCart';

import WishlistStyles from './WishlistStyles';

const Wishlist = () => {

  return ( 
    <User>
      {
        ({data, loading, error}) => {
          if (loading) return (
            <>
              <PageInfo message1={"Wishlist"} message2="" />
              <Spinner spacing="200px" />
            </>
          )

          return (
            <>
            <Head>
              <title>iShop | Wishlist</title>
            </Head>

            <PageInfo message1={"Wishlist"} 
              message2={`You have ${data.me.wishlist.length} ${data.me.wishlist.length === 0 || data.me.wishlist.length === 1 ? "item": "items"} in your wishlist`}
            />
              {
                data.me.wishlist.length === 0 ?
                  <div className="center">
                     <lottie-player
                      src="https://assets7.lottiefiles.com/packages/lf20_8LS0Np.json"  
                      background="transparent"  
                      speed="1"  
                      style={{ width: "250px", height: "250px" }} 
                      loop  
                      autoplay>
                    </lottie-player>
                  </div>
                : 
                  <WishlistStyles>
                    <div className="collection-items">
                      {
                        data.me.wishlist.map(wishlistItem => (
                          <div className="collection-card" key={wishlistItem.id}>
                          <div className="card-image-and-amount-wrapper">
                          <Link href={{ pathname: '/item', query: {id: wishlistItem.item.id} }}>
                            <a>
                              <div className="img-box">
                                  <img src={wishlistItem.item.image1} alt={wishlistItem.item.itemName} />
                              </div>
                            </a>
                          </Link>
                            <div className="amount">
                                <span>{formatMoney(wishlistItem.item.newPrice)}</span>&nbsp; 
                                <s> {formatMoney(wishlistItem.item.amount)} </s>
                            </div>
                          </div>
                          <div className="wrapper">
                            <div className="top">
                                <div className="item-name">
                                  {wishlistItem.item.itemName}
                                </div>
                                <AddWishlistItemToCart id={wishlistItem.item.id} wishlistItem={wishlistItem} />
                              </div>
                            <div className="bottom">
                                <span className="discount-percent">-3%</span>
                            </div>
                          </div>
                        </div>
                        ))
                      }
                    </div>
                </WishlistStyles>
              }
            </>
          )
        }
      }
    </User>
  );
}

export default Wishlist;
