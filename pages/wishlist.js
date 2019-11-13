import React from 'react';

import PageInfo from '../components/PageInfo/PageInfo';
import WishlistComponent from '../components/Wishlist/Wishlist';
import Pagination from '../components/Pagination/Pagination';
import SigninAuth from '../components/Signin/SigninAuth';

const Wishlist = () => {

  return (
    <SigninAuth>
      <PageInfo message1={`Wishlist`} />
      <WishlistComponent />
      <Pagination />
    </SigninAuth>
  );
}

export default Wishlist;
