import { useEffect, useRef } from 'react';
import Artplayer from 'artplayer';
import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

export default function Player({ option, getInstance, ...rest }) {
  const artRef = useRef();

  useEffect(() => {
    const art = new Artplayer({
      id: 'video-layer',
      ...option,
      container: artRef.current,
    });

    if (getInstance && typeof getInstance === 'function') {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(true);
      }
    };
  }, [option, getInstance]);

  return <div ref={artRef} {...rest}></div>;
}
