import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { MuseumDetailsCart, Scene } from '../../components';
import { fetchOneMuseum } from '../../redux/slices/museumSlice';

const MuseumDetails = () => {
  const [isDetailsOpen, setDetailsOpen] = useState(true);

  const { id } = useParams();

  const dispatch = useDispatch();

  const item = useSelector(({ museums }) => museums.oneMuseum);

  useEffect(() => {
    dispatch(fetchOneMuseum(id));
  }, [id]);

  return (
    <>
      <MuseumDetailsCart
        isOpen={isDetailsOpen}
        setOpen={setDetailsOpen}
        name={item.museumName}
        desc={item.museumDescription}
        image={item.fileContent}
        instagramURL={item.instagramURL}
        twitterURL={item.twitterURL}
      />
      <Scene />
    </>
  );
};

export default MuseumDetails;
