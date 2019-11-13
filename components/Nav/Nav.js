import React from 'react';
import Link from 'next/link';

import Counter from '../Counter/Counter';
import User from '../User/User';
import Signout from '../Signout/Signout';
import Spinner from '../Spinner/Spinner';

import NavStyles from './NavStyles';

const Nav = () => {

  return (
    <User>
      {
        ({ data, loading }) => {
          console.log(data);
          if (loading) return <Spinner spacing="600px"/>
        
          return (
            <NavStyles>
              <ul>
                <li>
                  <Link href="/">
                    <a><i className="fas fa-shopping-basket icon"></i><span>Shop</span></a>
                  </Link>
                </li>
                    <li>
                      <Link href="/wishlist">
                        <a><i className="fas fa-heart icon"></i><span>
                          <Counter count={ data.me !== null ? data.me.wishlist.length : 0 } />
                          </span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/cart">
                        <a><i className="fas fa-shopping-cart icon"></i><span>
                        <Counter 
                          count={ data.me !== null ? data.me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0) : 0 } 
                        />
                        </span></a>
                      </Link>
                    </li>
                    {
                      data.me && ( 
                      <>
                        <li>
                          <Link href="/orders">
                            <a><i className="fas fa-box-open icon"></i><span>Orders</span></a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/manage">
                            <a><i className="fas fa-tools icon"></i><span>Manage</span></a>
                          </Link>
                        </li>
                      </>
                    )
                  }
                {
                  !data.me && (
                    <li>
                      <Link href="/signin">
                        <a><i className="far fa-user-circle icon"></i><span>Sign in</span></a>
                      </Link>
                    </li>
                  )
                }
                {
                  data.me && (
                    <li style={{padding: 20}}><Signout /></li>
                  )
                }
              </ul>
            </NavStyles>
          )
        }
      }
    </User>
  )
}

export default Nav;
