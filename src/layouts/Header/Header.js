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
            <Link
              className={cx('navbar-item')}
              onClick={() => {
                handleDispatchFilter('phim-moi');
                window.location.href = 'https://music.newmoviesz.online';
              }}
            >
              <div className={cx('navbar-link')}>
                <span>FAQs</span>
              </div>
            </Link>
          </div>
          <div className={cx('navbar-end')}>
            <div className={cx('navbar-item', 'navbar-item__name')}>
              <div className={cx('navbar-link')}>
                <span className={cx('layout_name')}>Hữu Sang</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
