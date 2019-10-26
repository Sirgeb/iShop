import React from 'react';

import PageInfo from '../../components/PageInfo/PageInfo';
import Collection from '../../components/Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const Device = () => {

  return (
    <>
      <PageInfo message1={`5 Devices for you`} />
      <Collection />
      <Pagination />
    </>
  );
}

export default Device;
