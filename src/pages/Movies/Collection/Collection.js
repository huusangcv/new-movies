import { memo, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { wantToSeeMovies, watchedMovies } from '~/redux/selector/selector';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageComponent from '~/components/ImagesComponent/ImagesComponent';
const cx = classNames.bind(styles);

const Collection = () => {
  const watched = useSelector(watchedMovies);
  const wantToSee = useSelector(wantToSeeMovies);

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className={cx('title')}>Bộ sưu tập phim của bạn</h1>
          <h2 className={cx('title', 'is-4')}>Các phim bạn muốn xem:</h2>

          {(wantToSee.length === 0 && (
            <div style={{ color: '#7a7a7a' }}>Bạn chưa thêm phim nào vào danh sách này</div>
          )) || (
            <div className="gird columns">
              {wantToSee?.map((movie) => {
                return (
                  <Link to={`/movie/${movie.slug}`} className="column" key={movie._id}>
                    <div className="cover">
                      <ImageComponent
                        src={`https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                        alt={movie.name}
                        srcSet={`
                              https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w`}
                      />
                    </div>
                    <h3 className="name vi">
                      <span>{movie.name}</span>
                    </h3>
                    <h3 className="name en">
                      <span>{movie.origin_name}</span>
                    </h3>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <hr />

        <div className="title-list">
          <h2 className={cx('title', 'is-4')}>Các phim bạn đã xem:</h2>
          {(watched.length === 0 && (
            <div style={{ color: '#7a7a7a' }}>Bạn chưa thêm phim nào vào danh sách này</div>
          )) || (
            <div className="gird columns">
              {watched?.map((movie) => {
                return (
                  <Link to={`/movie/${movie.slug}`} className="column" key={movie._id}>
                    <div className="cover">
                      <LazyLoadImage
                        src={`https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                        alt={movie.name}
                        effect="blur"
                        srcSet={`
                            https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w`}
                      ></LazyLoadImage>
                    </div>
                    <h3 className="name vi">
                      <span>{movie.name}</span>
                    </h3>
                    <h3 className="name en">
                      <span>{movie.origin_name}</span>
                    </h3>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Collection);
