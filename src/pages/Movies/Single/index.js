import classNames from 'classnames/bind';
import styles from './Single.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const cx = classNames.bind(styles);

const Single = () => {
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    document.title = 'Phim lẻ';
    window.scroll({
      top: 0,
    });
  }, []);

  return (
    <div className={cx('wapper')}>
      <div className="title-list">
        <div className="title-movies">PHIM LẺ</div>
        <div className="gird columns">
          {movies?.single.map((movie) => {
            return (
              <div className="column" key={movie._id}>
                <a href="#!" className="cover">
                  <LazyLoadImage
                    src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                    alt=""
                    effect="blur"
                  ></LazyLoadImage>
                </a>
                <h3 className="name vi">
                  <a href="#!">{movie.name}</a>
                </h3>
                <h3 className="name en">
                  <a href="#!">{movie.origin_name}</a>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Single;
