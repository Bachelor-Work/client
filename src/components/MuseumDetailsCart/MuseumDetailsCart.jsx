import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { convertToImage } from '../../bytesToPNG';
import instagramIcon from '../../common/icons/instagram.svg';
import twitterIcon from '../../common/icons/twitter.svg';

import './MuseumDetailsCart.scss';

const MuseumDetailsCart = ({ name, image, desc, instagramURL, twitterURL, isOpen, setOpen }) => {
  const isLoaded = useSelector(({ museums }) => museums.oneMuseumLoaded);

  if (!isOpen) return null;

  return (
    <>
      <div onClick={() => setOpen(false)} className="backdrop" />
      <div className="museumDetailsCartWrapper">
        {isLoaded && (
          <>
            <img
              className="museumImage"
              src={convertToImage(image)}
              alt="Museum"
            />
            <div className="museumDetailsCartInfo">
              <div className="museumText">
                <div className="museumName">{name}</div>
                <div title={desc} className="museumDescription">
                  {desc}
                </div>
              </div>

              <div className="museumLinks">
                {instagramURL && (
                  <a href={instagramURL} target="_blank" rel="noreferrer">
                    <img
                      className="museumLink"
                      src={instagramIcon}
                      alt="instagramIcon"
                    />
                  </a>
                )}
                {twitterURL && (
                  <a href={twitterURL} target="_blank" rel="noreferrer">
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
          </>
        )}
      </div>
    </>
  );
};

export default MuseumDetailsCart;
