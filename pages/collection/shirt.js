import React from 'react';

import PageInfo from '../../components/PageInfo/PageInfo';
import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const Shirt = () => {

  return (
    <>
      <PageInfo message1={`5 Shirts for you`} />
      <Collection />
      <Pagination />
    </>
  );
}

export default Shirt;
