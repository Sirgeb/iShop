import React from 'react';

import PageInfo from '../../components/PageInfo/PageInfo';
import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const WristWatch = () => {

  return (
    <>
      <PageInfo message1={`5 wrist watches for you`} />
      <Collection />
      <Pagination />
    </>
  );
}

export default WristWatch;
