import React from 'react';
import Link from 'next/link';

import { useUserData } from '../../hooks/AppContext';
import Counter from '../Counter/Counter';
import Signout from '../Signout/Signout';
import Spinner from '../Spinner/Spinner';

import NavStyles from './NavStyles';

const Nav = () => {
  const { data, loading } = useUserData();

  if (loading) return <Spinner hide={true} spacing="600px"/>

  return (
    <NavStyles>
      <ul>
        <li className="mb">
          <Link href="/">
            <a><i className="fas fa-shopping-basket icon"></i><span>Shop</span></a>
          </Link>
        </li>
            <li className="side-space">
              <Link href="/wishlist">
                <a><i className="fas fa-heart icon counter"></i><span>
                  <Counter count={ data.me !== null ? data.me.wishlist.length : 0 } />
                  </span></a>
              </Link>
            </li>
            <li className="side-space">
              <Link href="/cart">
                <a><i className="fas fa-shopping-cart icon counter"></i><span>
                <Counter 
                  count={ data.me !== null? data.me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0) : 0 } 
                />
                </span></a>
              </Link>
            </li>
            {
              data.me && ( 
              <>
                <li className="mb">
                  <Link href="/orders">
                    <a><i className="fas fa-box-open icon"></i><span>Orders</span></a>
                  </Link>
                </li>
                <li className="mb">
                  <Link href="/manage">
                    <a><i className="fas fa-tools icon"></i><span>Manage</span></a>
                  </Link>
                </li>
              </>
            )
          }
        {
          !data.me && (
            <li className="mb">
              <Link href="/signin">
                <a><i className="far fa-user-circle icon"></i><span>Sign in</span></a>
              </Link>
            </li>
          )
        }
        {
          data.me && (
            <li className="mb"><Signout /></li>
          )
        }
      </ul>
    </NavStyles>
  )
}

export default Nav;
