import React, { useState } from 'react';
import style from './ImagesComponent.module.scss';
import classNames from 'classnames/bind';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cx = classNames.bind(style);
const ImageComponent = ({ src, alt, srcSet }) => {
  return (
    <picture>
      <source srcSet={srcSet} type="image/avif" />
      <LazyLoadImage src={src} alt={alt} effect="blur" />
    </picture>
  );
};

export default ImageComponent;
