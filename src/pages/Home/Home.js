import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import moviesRecommend from '~/components/Options/recommend';
import getMovies from '~/services/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { getNewUpdateMovies } from '~/redux/actions';
import { movieNewUpdate } from '~/redux/selector/selector';
import Filter from '~/layouts/Filter';

const cx = classNames.bind(styles);

const HomePage = () => {
  const dispatch = useDispatch();
  const moviesNewUpdate = useSelector(movieNewUpdate);

  useEffect(() => {
    document.title = 'Từ Hollywood đến Bollywood, chúng tôi mang đến những bộ phim bạn yêu thích';

    const fetchApi = async () => {
      const [newUpdateSingle, newUpdateSeries] = await Promise.all([
        getMovies.newUpdateSingle(),
        getMovies.newUpdateSeries(),
      ]);

      const result1 = newUpdateSingle.items.map((movie) => {
        return {
          name: movie.name,
          slug: movie.slug,
          origin_name: movie.origin_name,
          thumb_url: movie.thumb_url,
        };
      });

      const result2 = newUpdateSeries.items.map((movie) => {
        return {
          name: movie.name,
          slug: movie.slug,
          origin_name: movie.origin_name,
          thumb_url: movie.thumb_url,
        };
      });

      dispatch(
        getNewUpdateMovies({
          single: result1,
          series: result2,
        }),
      );
    };
    fetchApi();

    window.scroll({
      top: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('wapper')}>
      <Filter />
      <h2 className="heading">
        <span>PHIM ĐỀ CỬ</span>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          {moviesRecommend.map((movie) => {
            return (
              <Link to={`/movie/${movie.slug}`} className="column" key={movie.id}>
                <div className="cover">
                  <img src={movie.thumb_url} alt="" />
                </div>
                <h3 className="name vi">
                  <span>
                    <span>{movie.name}</span>
                  </span>
                </h3>
                <h3 className="name en">
                  <span>
                    <span>{movie.origin_name}</span>
                  </span>
                </h3>
              </Link>
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
          {moviesNewUpdate?.single.map((movie, index) => {
            return (
              index <= 9 && (
                <Link to={`movie/${movie.slug}`} className="column" key={movie._id}>
                  <div className="cover">
                    <img
                      src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                      alt={movie.origin_name}
                      title={movie.origin_name}
                    ></img>
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
          {moviesNewUpdate?.series.map((movie, index) => {
            return (
              index <= 9 && (
                <Link to={`movie/${movie.slug}`} className="column" key={movie._id}>
                  <span className="cover">
                    <img src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`} alt=""></img>
                  </span>
                  <h3 className="name vi">
                    <span>
                      <span>{movie.name}</span>
                    </span>
                  </h3>
                  <h3 className="name en">
                    <span>
                      <span>{movie.origin_name}</span>
                    </span>
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
