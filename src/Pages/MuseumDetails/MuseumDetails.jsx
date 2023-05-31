import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import MuseumDetailsCart from '../../components/MuseumDetailsCart/MuseumDetailsCart';

import { fetchOneMuseum } from '../../redux/slices/museumSlice';

const MuseumDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const item = useSelector(({ museums }) => museums.oneMuseum);

  useEffect(() => {
    dispatch(fetchOneMuseum(id));

  }, [id]);



  return (
    <div>
      <MuseumDetailsCart
        name={item.museumName}
        desc={item.museumDescription}
        image={item.imgContent}
        instagramURL={item.instagramURL}
        twitterURL={item.twitterURL}
      />
      

    </div>
  );
};

export default MuseumDetails;
