import React from 'react';

import './MuseumItem.scss';

import itemPNG from '../../common/icons/itemPNG.png';

const MuseumItem = () => {
  return (
    <div className="itemContiner">
        <img className="itemImage" src={itemPNG} alt="item image" />
        <div className='museumName'>Museum of Science</div>
    </div>
  );
};

export default MuseumItem;
