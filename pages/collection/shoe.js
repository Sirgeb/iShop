import React from 'react';

import PageInfo from '../../components/PageInfo/PageInfo';
import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const Shoe = () => {

  return (
    <>
      <PageInfo message1={`5 Shoes for you`} />
      <Collection />
      <Pagination />
    </>
  );
}

export default Shoe;
