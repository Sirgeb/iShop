import React from 'react';

import SearchStyles from './SearchStyles';

const Search = () => {

  return (
    <SearchStyles>
      <input 
        type="search" 
        name="search" 
        autoFocus 
        placeholder="What do you want to buy?"
      />
    </SearchStyles>
  )
}

export default Search;
