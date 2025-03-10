import classNames from 'classnames/bind';
import ReactGA from 'react-ga4';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewUpdateMovies } from '~/redux/actions';
import { movieNewUpdate } from '~/redux/selector/selector';
import styles from './Home.module.scss';
// import moviesRecommend from '~/components/Options/recommend';
import getMovies from '~/services/getMovies';
import Filter from '~/layouts/Filter';
import Snowfall from 'react-snowfall';
import ImageComponent from '~/components/ImagesComponent/ImagesComponent';

const cx = classNames.bind(styles);

const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(() => {
    if (window.innerWidth > 1280) return 9;
    return 7;
  });

  const moviesNewUpdate = useSelector(movieNewUpdate);

  useEffect(() => {
    document.title = 'Từ Hollywood đến Bollywood, chúng tôi mang đến những bộ phim bạn yêu thích';
    if (!moviesNewUpdate.single || moviesNewUpdate.single.length === 0) {
      const fetchApi = async () => {
        setIsLoading(true);
        const [newUpdateRecommend, newUpdateSingle, newUpdateSeries] = await Promise.all([
          getMovies.newUpdateRecommend(),
          getMovies.newUpdateSingle(),
          getMovies.newUpdateSeries(),
        ]);
        if ([newUpdateRecommend, newUpdateSingle, newUpdateSeries]) {
          const result1 = newUpdateRecommend.data.map((movie) => {
            return {
              name: movie.name_vi,
              slug: movie.slug,
              origin_name: movie.name_en,
              thumb_url: movie.thumb,
            };
          });

          const result2 = newUpdateSingle.items.map((movie) => {
            return {
              name: movie.name,
              slug: movie.slug,
              origin_name: movie.origin_name,
              thumb_url: movie.thumb_url,
            };
          });

          const result3 = newUpdateSeries.items.map((movie) => {
            return {
              name: movie.name,
              slug: movie.slug,
              origin_name: movie.origin_name,
              thumb_url: movie.thumb_url,
            };
          });

          dispatch(
            getNewUpdateMovies({
              recommend: result1,
              single: result2,
              series: result3,
            }),
          );
          setIsLoading(false);
        }
      };
      fetchApi();
    } else if (moviesNewUpdate) {
      setIsLoading(false);
    }

    window.scroll({
      top: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('pageview');
  }, [location]);

  useEffect(() => {
    const handleResize = (e) => {
      if (e.target.innerWidth <= 1280) {
        setIndex(7);

        if (e.target.innerWidth <= 1163) {
          setIndex(5);
        }
      } else {
        setIndex(9);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className={cx('wapper')}>
      {/* <Snowfall style={{ zIndex: 999999999 }} /> */}
      <Filter noneMultiline={true} />
      <h2 className="heading">
        <span>PHIM ĐỀ CỬ</span>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          {moviesNewUpdate?.recommend.map((movie, currentItem) => {
            let newIndex = index;
            if (window.innerWidth > 1280) newIndex = 4;
            return (
              currentItem <= newIndex && (
                <Link to={`/movie/${movie.slug}`} className="column" key={movie.id}>
                  <div className="cover">
                    <ImageComponent
                      src={`https://ophim17.cc/_next/image?url=https%3A%2F%2Fimg.ophim.live%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                      alt={movie.name}
                      srcSet={`
                              https://ophim17.cc/_next/image?url=https%3A%2F%2Fimg.ophim.live%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w`}
                    />
                  </div>
                  <h3 className="name vi">
                    <span>{movie.name}</span>
                  </h3>
                  <h3 className="name en">
                    <span>{movie.origin_name}</span>
                  </h3>
                </Link>
              )
            );
          })}
        </div>
      </div>

      <h2 className="heading">
        <span>PHIM LẺ MỚI CẬP NHẬT</span>
        <Link to="/movies/single" className={cx('heading', 'watch-all')}>
          Xem tất cả{' '}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
            <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
          </svg>
        </Link>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          {(isLoading && <p>Loading...</p>) ||
            moviesNewUpdate?.single.map((movie, currentItem) => {
              return (
                currentItem <= index && (
                  <Link to={`movie/${movie.slug}`} className="column" key={movie._id}>
                    <div className="cover">
                      <ImageComponent
                        src={`https://ophim17.cc/_next/image?url=https%3A%2F%2Fimg.ophim.live%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                        alt={movie.name}
                        srcSet={`
                              https://ophim17.cc/_next/image?url=https%3A%2F%2Fimg.ophim.live%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 `}
                      />
                    </div>
                    <h3 className="name vi">
                      <span>{movie.name}</span>
                    </h3>
                    <h3 className="name en">
                      <span>{movie.origin_name}</span>
                    </h3>
                  </Link>
                )
              );
            })}
        </div>
      </div>
      <h2 className="heading">
        <span>PHIM BỘ MỚI CẬP NHẬT</span>
        <Link to="/movies/series" className={cx('heading', 'watch-all')}>
          Xem tất cả{' '}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
            <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
          </svg>
        </Link>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          {(isLoading && <p>Loading...</p>) ||
            moviesNewUpdate?.series.map((movie, currentItem) => {
              return (
                currentItem <= index && (
                  <Link to={`movie/${movie.slug}`} className="column" key={movie._id}>
                    <span className="cover">
                      <ImageComponent
                        src={`https://ophim17.cc/_next/image?url=https%3A%2F%2Fimg.ophim.live%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75
`}
                        alt={movie.name}
                      />
                    </span>
                    <h3 className="name vi">
                      <span>{movie.name}</span>
                    </h3>
                    <h3 className="name en">
                      <span>{movie.origin_name}</span>
                    </h3>
                  </Link>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
