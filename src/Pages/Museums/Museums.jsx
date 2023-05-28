import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Museums.scss';

import { SearchBar } from '../../components';
import MuseumItem from '../../components/MuseumItem/MuseumItem';
import { fetchAllMuseums } from '../../redux/slices/museumSlice';

const Museums = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ museums }) => museums.allMuseums);

  useEffect(() => {
    dispatch(fetchAllMuseums());
  }, []);

  return (
    <div className="pageWrapper">
      <SearchBar />
      <div className="museumList">
        {items &&
          items.map((item) => (
            <MuseumItem
              key={item.id}
              id={item.id}
              name={item.museumName}
              img={item.fileContent}
              color={item.dominantColor}
            />
          ))}
      </div>
    </div>
  );
};

export default Museums;
