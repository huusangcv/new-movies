import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { getMoviesSeries, getMoviesSingle } from '~/redux/actions/getMovies';
import thumb from '~/assets/images/thumb.jpg';
import getMovies from '~/services/getMovies';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Details from '../Movie/Details';

const cx = classNames.bind(styles);

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    document.title = 'Từ Hollywood đến Bollywood, chúng tôi mang đến những bộ phim bạn yêu thích';
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const [moviesSingle, moviesSeries] = await Promise.all([getMovies.Single(), getMovies.Series()]);
      dispatch(getMoviesSingle(moviesSingle.items));
      dispatch(getMoviesSeries(moviesSeries.items));
    };

    let timer = setTimeout(() => {
      fetchApi();
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className={cx('wapper')}>
      <h2 className="heading">
        <span>PHIM ĐỀ CỬ</span>
      </h2>

      <div className="title-list">
        <div className="gird columns">
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
        </div>
      </div>

      <h2 className="heading">
        <span>PHIM LẺ MỚI CẬP NHẬT</span>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          {movies?.single.map((movie, index) => {
            return (
              index <= 9 && (
                <div className="column" key={movie._id}>
                  <Link to={`movie/${movie.slug}`} className="cover">
                    <img
                      src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                      alt={movie.origin_name}
                      title={movie.origin_name}
                    ></img>
                  </Link>
                  <h3 className="name vi">
                    <a href="#!">{movie.name}</a>
                  </h3>
                  <h3 className="name en">
                    <a href="#!">{movie.origin_name}</a>
                  </h3>
                </div>
              )
            );
          })}
        </div>
      </div>
      <h2 className="heading">
        <span>PHIM BỘ MỚI CẬP NHẬT</span>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          {movies?.series.map((movie, index) => {
            return (
              index <= 9 && (
                <div className="column" key={movie._id}>
                  <a href="#!" className="cover">
                    <img src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`} alt=""></img>
                  </a>
                  <h3 className="name vi">
                    <a href="#!">{movie.name}</a>
                  </h3>
                  <h3 className="name en">
                    <a href="#!">{movie.origin_name}</a>
                  </h3>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
