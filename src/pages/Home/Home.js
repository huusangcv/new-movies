import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import thumb from '~/assets/images/thumb.jpg';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
  useEffect(() => {
    document.title = 'Từ Hollywood đến Bollywood, chúng tôi mang đến những bộ phim bạn yêu thích';
  }, []);

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
        <Link to="/movies/single" className={cx('heading', 'watch-all')}>
          Xem tất cả{' '}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
            <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
          </svg>
        </Link>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          {/* {
            movies?.single.map((movie, index) => {
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
            })} */}
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
          {/* {movies?.series.map((movie, index) => {
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
          })} */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
