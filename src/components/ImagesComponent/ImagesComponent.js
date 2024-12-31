import React, { useState } from 'react';
import style from './ImagesComponent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
const ImageComponent = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-container">
      {!isLoaded && <p>Loading...</p>}
      <img
        src={src}
        alt={alt}
        className={cx(`image ${isLoaded ? 'loaded' : ''}`)} // Thêm class để quản lý CSS
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageComponent;
