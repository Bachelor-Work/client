import React from 'react';

import './Input.scss';

const SearchInput = () => {
  return (
    <div className="searchInputContainer">
      <input className="searchInput" type="text" placeholder="Search.." />
    </div>
  );
};

export default SearchInput;
