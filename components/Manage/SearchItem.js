import React from 'react';

import SearchItemStyles from './SearchItemStyles';

const SearchItem = () => {

  return (
    <SearchItemStyles>
      <input type="search" name="search" autoComplete="off" placeholder="Search for an item" />
    </SearchItemStyles> 
  )
}

export default SearchItem;
