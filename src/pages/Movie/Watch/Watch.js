/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
import { useSelector } from 'react-redux';
import { movieDetail } from '~/redux/selector/selector';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const Watch = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (movie?.episodes[0]?.server_data[0].link_embed) {
      setIsLoading(false);
    }

    window.scroll({
      top: 0,
    });
  }, []);

  const movie = useSelector(movieDetail);
  return (
    <>
      {(isLoading && <p>Loading...</p>) || (
        <div className={cx('watch_video')}>
          <div className={cx('columns')}>
            <div className={cx('column')}>
              <div className={cx('video-js')}>
                <iframe
                  className={cx('vjs-tech')}
                  src={movie?.episodes[0]?.server_data[0].link_embed}
                  frameborder="0"
                  muted
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <div
                className={cx('video-poster')}
                style={{
                  backgroundImage: `url('https://img.ophim.live/uploads/movies/${movie?.poster_url}')`,
                }}
              ></div> */}
              </div>
            </div>
          </div>
          <p className={cx('has-text-centered', 'is-size-7')}>
            <a href="/faq">Phim bị giật hình / mất tiếng nhân vật?</a>
          </p>
          <section className={cx('section')}>
            <div className={cx('container')}>
              <div className={cx('columns')}>
                <div className={cx('column')}>
                  <h1 className="title is-3">Đẹp Trai Thấy Sai Sai</h1>
                  <h2 className="subtitle is-5">
                    Handsome Guys (<a href="#!">2024</a>)
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Watch;
