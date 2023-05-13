import React from 'react';
import SearchInput from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';

import './SearchBar.scss';

const SearchBar = () => {
  const dropdown = ['Value 1','Value 2','Value 3','Value 4' ]
  return (
    <div className='searchBar'>
      <div className="leftSide">
        <SearchInput />
      </div>
      <div className="rightSide">
        <Dropdown title={"Category"} items={dropdown} />
      </div>
    </div>
  );
};

export default SearchBar;
