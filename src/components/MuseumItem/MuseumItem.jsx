import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MuseumItem.scss';

import { convertToImage } from '../../bytesToPNG';
import { hexToRGBA } from '../../hexToRGBA';

const MuseumItem = ({ id, name, img, color }) => {
  const [boxShadow, setBoxShadow] = useState(
    '0px 4px 6px 2px rgba(0, 0, 0, 0.25)'
  );

  var containerStyle = {
    backgroundColor: `${color}`,
    borderColor: `${color}`,
    boxShadow: boxShadow,
  };

  const handleMouseEnter = () => {
    setBoxShadow(`0px 0px 10px 3px ${hexToRGBA(color, 0.95)}`);
  };

  const handleMouseLeave = () => {
    setBoxShadow('0px 4px 6px 2px rgba(0, 0, 0, 0.25)');
  };

  return (
    <Link to={`/museums/${id}`}>
      <div
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="itemContiner"
      >
        <img className="itemImage" src={convertToImage(img)} alt="item image" />
        <div className="museumName">{name}</div>
      </div>
    </Link>
  );
};

export default MuseumItem;
