import React from 'react';

import './SearchBar.scss'
import searchSVG from '../../common/icons/search.svg'

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <input className='searchInput' type="text" placeholder='Search..'/>
      <div className="searchButton">
        <img src={searchSVG} alt='' className="searchSvg"/>
      </div>
    </div>
  );
};

export default SearchBar;