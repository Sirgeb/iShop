import React from 'react';

import PageInfo from '../components/PageInfo/PageInfo';
import WishlistComponent from '../components/Wishlist/Wishlist';
import Pagination from '../components/Pagination/Pagination';

const Wishlist = () => {

  return (
    <>
      <PageInfo message1={`Wishlist`} />
      <WishlistComponent />
      <Pagination />
    </>
  );
}

export default Wishlist;
