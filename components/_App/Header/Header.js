import React from 'react';
import HeaderStyles from './HeaderStyles';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = () => {
  return (
    <HeaderStyles>
      <div className="wrapper">
        <div className="logo">
          <Link href="/">
            <a>
              <i className="fas fa-shopping-bag"></i>&nbsp;&nbsp;<span>iShop</span>
            </a>
          </Link>
        </div>

        <div className="search">
          <input type="search" name="search" autoFocus placeholder="What do you want to buy?"/>
        </div>
      </div>

      <div className="nav">
        <ul>
          <li><a><i className="fas fa-shopping-basket icon"></i><span>Shop</span></a></li>
          <li><a><i className="fas fa-heart icon"></i><span>0</span></a></li>
          <li><a><i className="fas fa-shopping-cart icon"></i><span>0</span></a></li>
          <li><a><i className="fas fa-box-open icon"></i><span>Orders</span></a></li>
          <li><a><i className="fas fa-tools icon"></i><span>Manage</span></a></li>
          <li><a><i className="far fa-user-circle icon"></i><span>Account</span></a></li>
          <li><a><i className="fas fa-power-off icon"></i><span>Signout</span></a></li>
        </ul>
      </div>
    </HeaderStyles>
  )
}

export default Header;
