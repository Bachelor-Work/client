import React from 'react';
import { convertToImage } from '../../bytesToPNG';

import './MuseumDetailsCart.scss';

import instagramIcon from '../../common/icons/instagram.svg';
import twitterIcon from '../../common/icons/twitter.svg';
import { Link } from 'react-router-dom';

const MuseumDetailsCart = ({ name, image, desc, instagramURL, twitterURL }) => {
  return (
    <>
      <div className="backdrop" />
      <div className="museumDetailsCartWrapper">
        <img
          className="museumImage"
          src={convertToImage(image)}
          alt="Museum image"
        />
        <div className="museumDetailsCartInfo">
          <div className="museumText">
            <div className="museumName">{name}</div>
            <div title={desc} className="museumDescription">{desc}</div>
          </div>

          <div className="museumLinks">
            {instagramURL && (
              <a href={instagramURL} target="_blank">
                <img
                  className="museumLink"
                  src={instagramIcon}
                  alt="instagramIcon"
                />
              </a>
            )}
            {twitterURL && (
              <a href={twitterURL} target="_blank">
                <img
                  className="museumLink"
                  src={twitterIcon}
                  alt="instagramIcon"
                />
              </a>
            )}
            <Link to="/museums" className="backButton">
              <div>Back to Museums</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MuseumDetailsCart;
