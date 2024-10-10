import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { toggleBars } from '~/redux/actions/toggleBars';
import { useEffect, useState } from 'react';
import { filterMoviesByCategory } from '~/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [background, setBackground] = useState('');
  const dispatch = useDispatch();
  const isShowBar = useSelector((state) => state.isShowBar);

  useEffect(() => {
    //Func handle event set background for header when user scroll down
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBackground('#401a70');
      } else {
        setBackground('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    //Func cleanup of useEffect to clear EventListener
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Func show/close bars for mobile
  const handleShowBar = () => {
    dispatch(toggleBars(!isShowBar));
  };

  //Func update state of filter
  const handleDispatchFilter = (payload) => {
    if (payload === '') {
      dispatch(
        filterMoviesByCategory({
          titlePage: '',
          filterState: false,
          moviesType: '',
          type: '',
          nation: '',
          year: '',
          sortBy: '',
        }),
      );
    } else
      dispatch(
        filterMoviesByCategory({
          moviesType: payload,
        }),
      );
  };

  return (
    <header className={cx('wapper')}>
      <nav className={cx('navbar', 'mobile')} style={{ background: background && background, opacity: 0.9 }}>
        <button className={cx('bars-toggle')} tabIndex="0" type="button" onClick={handleShowBar}>
          <span className="MuiIconButton-label">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
            </svg>
          </span>
        </button>
        <div className={cx('navbar-brand')}>
          <Link to="/" className={cx('navbar-item', 'brand')} onClick={() => handleDispatchFilter('')}>
            <div className={cx('logo-text')}>
              <span>NewMovies</span>
            </div>
          </Link>
        </div>
        <div className={cx('navbar-menu', 'mobile')}>
          <div className={cx('navbar-start')}>
            <Link className={cx('navbar-item')} to="/search">
              <div className={cx('navbar-link')}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                  </svg>
                  Tìm kiếm
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <nav className={cx('navbar', 'desktop')} style={{ background: background && background, opacity: 0.9 }}>
        <div className={cx('navbar-brand')}>
          <div className={cx('navbar-item', 'brand')}>
            <Link className={cx('logo-text')} to="/" onClick={() => handleDispatchFilter('')}>
              NewMovies
            </Link>
          </div>
        </div>
        <div className={cx('navbar-menu')}>
          <div className={cx('navbar-start')}>
            <Link className={cx('navbar-item')} to="/search">
              <div className={cx('navbar-link')}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                  </svg>
                  Tìm kiếm
                </span>
              </div>
            </Link>
            <Link className={cx('navbar-item')} to="/top">
              <div className={cx('navbar-link')}>
                <span>Phim hot</span>
              </div>
            </Link>
            <Link className={cx('navbar-item')} to="/movies/series" onClick={() => handleDispatchFilter('phim-bo')}>
              <div className={cx('navbar-link')}>
                <span>Phim bộ</span>
              </div>
            </Link>
            <Link className={cx('navbar-item')} to="/movies/single" onClick={() => handleDispatchFilter('phim-le')}>
              <div className={cx('navbar-link')}>
                <span>Phim lẻ</span>
              </div>
            </Link>
            <Link className={cx('navbar-item')} to="/movies/new" onClick={() => handleDispatchFilter('phim-moi')}>
              <div className={cx('navbar-link')}>
                <span>Phim mới</span>
              </div>
            </Link>
            <Link className={cx('navbar-item')} to="/faqs" onClick={() => handleDispatchFilter('phim-moi')}>
              <div className={cx('navbar-link')}>
                <span>FAQs</span>
              </div>
            </Link>
          </div>
          <div className={cx('navbar-end')}>
            <div div className={cx('navbar-item', 'has-dropdown', 'is-hoverable', 'navbar-item__name')}>
              <div className={cx('navbar-link')}>
                <span className={cx('layout_name')}>Người Dùng</span>
              </div>
              <div className={cx('navbar-dropdown', 'is-right header-menu')}>
                <Link className={cx('navbar-item')} to={'/settings'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 32c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 32 256 32m128 320c52.9 0 96 43.1 96 96v32H32v-32c0-52.9 43.1-96 96-96 85 0 67.3 16 128 16 60.9 0 42.9-16 128-16M256 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S335.5 0 256 0zm128 320c-92.4 0-71 16-128 16-56.8 0-35.7-16-128-16C57.3 320 0 377.3 0 448v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z"></path>
                  </svg>
                  Tài khoản
                </Link>
                <Link className={cx('navbar-item')} to={'/donate'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M224.7 215.7l56.4 16.1c8.8 2.5 14.9 10.6 14.9 19.7 0 11.3-9.2 20.5-20.5 20.5h-36.9c-8.2 0-16.1-2.6-22.6-7.3-3-2.2-7.2-1.5-9.8 1.2l-11.4 11.4c-3.5 3.5-2.9 9.2 1 12.2 12.3 9.4 27.2 14.5 42.9 14.5h1.4v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24h1.4c22.8 0 44.3-13.6 51.7-35.2 10.1-29.6-7.3-59.8-35.1-67.8L231 184.1c-8.8-2.5-14.9-10.6-14.9-19.7 0-11.3 9.2-20.5 20.5-20.5h36.9c8.2 0 16.1 2.6 22.6 7.3 3 2.2 7.2 1.5 9.8-1.2l11.4-11.4c3.5-3.5 2.9-9.2-1-12.2-12.3-9.4-27.2-14.5-42.9-14.5H272V88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h-3.5c-30.6 0-55.1 26.3-52.2 57.5 2 22.1 19 40.1 40.4 46.2zM480 288h-32c10.3-24.6 16-51.6 16-80C464 93.1 370.9 0 256 0S48 93.1 48 208c0 28.4 5.7 55.4 16 80H32c-17.7 0-32 14.4-32 32v160c0 17.6 14.3 32 32 32h448c17.7 0 32-14.4 32-32V320c0-17.6-14.3-32-32-32zM256 32c97 0 176 79 176 176s-79 176-176 176S80 305 80 208 159 32 256 32zm224 448H32V320h48.9c16.6 25.8 38.6 47.7 64.6 64H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-41.5c26-16.3 48-38.2 64.6-64H480v160z"></path>
                  </svg>
                  Donate
                </Link>
                <Link to="/collection" className={cx('navbar-item')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v296zm96-32c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
                  </svg>{' '}
                  Bộ sưu tập
                </Link>
                <a className={cx('navbar-item')} href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"></path>
                  </svg>{' '}
                  Thoát
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
