import React, { useEffect } from 'react';
import MuseumItem from '../../components/MuseumItem/MuseumItem';

import './Museums.scss';

import { SearchBar } from '../../components';
import { useDispatch } from 'react-redux';
import { fetchAllMuseums } from '../../redux/museumReducer';

const Museums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMuseums());
  }, []);

  return (
    <div className="pageWrapper">
      <SearchBar />
      <div className="museumList">
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
