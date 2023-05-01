import React from 'react';
import MuseumItem from '../../components/MuseumItem/MuseumItem';

import './Museums.scss'

import { SearchBar } from '../../components';
const Museums = () => {
  return (
    <div className='pageWrapper'>
      <SearchBar />
      <div className='museumList'>
        <MuseumItem />
        <MuseumItem />
        <MuseumItem />
        <MuseumItem />
        <MuseumItem />
        <MuseumItem />
      </div>
    </div>
  );
};

export default Museums;