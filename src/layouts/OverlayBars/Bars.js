import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toggleBars } from '~/redux/actions/toggleBars';
import styles from './Bars.module.scss';
import { userProfile } from '~/redux/selector/selector';
import { useCookies } from 'react-cookie';

const cx = classNames.bind(styles);
const hasCookie = () => {
  return document.cookie.split(';').some((item) => item.trim().startsWith('token='));
};
const Bars = () => {
  const isShowBar = useSelector((state) => state.isShowBar);
  const dispatch = useDispatch();
  const user = useSelector(userProfile);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  useEffect(() => {
    const body = document.querySelector('body');
    if (isShowBar) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }

    return () => body.classList.remove('no-scroll');
  }, [isShowBar]);

  const handleCloseBar = () => {
    dispatch(toggleBars(false));
  };

  useEffect(() => {
    if (!cookies) {
      navigate('/');
    }
  }, [cookies]);

  const handleLogout = () => {
    removeCookie('token', {
      path: '/',
    });
    navigate('/');
  };

  return (
    <div className={cx('wapper')}>
      <div className={isShowBar ? cx('overlay') : ''} onClick={handleCloseBar}></div>
      <div className={cx('bars', isShowBar && 'show')}>
        {(hasCookie() && (
          <>
            <Link className={cx('bar', 'name')}>
              <div className={cx('layout_icon')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
              </div>
              <div className="MuiListItemText-root">
                <span>{user.name}</span>
              </div>
            </Link>
            <Link to="/settings" className={cx('bar')} onClick={handleCloseBar}>
              <div className={cx('layout_icon')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path>
                </svg>
              </div>
              <div className="MuiListItemText-root">
                <span>Tài khoản</span>
              </div>
            </Link>
            <Link to="/donate" onClick={handleCloseBar} className={cx('bar')}>
              <div className={cx('layout_icon')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M224.7 215.7l56.4 16.1c8.8 2.5 14.9 10.6 14.9 19.7 0 11.3-9.2 20.5-20.5 20.5h-36.9c-8.2 0-16.1-2.6-22.6-7.3-3-2.2-7.2-1.5-9.8 1.2l-11.4 11.4c-3.5 3.5-2.9 9.2 1 12.2 12.3 9.4 27.2 14.5 42.9 14.5h1.4v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24h1.4c22.8 0 44.3-13.6 51.7-35.2 10.1-29.6-7.3-59.8-35.1-67.8L231 184.1c-8.8-2.5-14.9-10.6-14.9-19.7 0-11.3 9.2-20.5 20.5-20.5h36.9c8.2 0 16.1 2.6 22.6 7.3 3 2.2 7.2 1.5 9.8-1.2l11.4-11.4c3.5-3.5 2.9-9.2-1-12.2-12.3-9.4-27.2-14.5-42.9-14.5H272V88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h-3.5c-30.6 0-55.1 26.3-52.2 57.5 2 22.1 19 40.1 40.4 46.2zM480 288h-32c10.3-24.6 16-51.6 16-80C464 93.1 370.9 0 256 0S48 93.1 48 208c0 28.4 5.7 55.4 16 80H32c-17.7 0-32 14.4-32 32v160c0 17.6 14.3 32 32 32h448c17.7 0 32-14.4 32-32V320c0-17.6-14.3-32-32-32zM256 32c97 0 176 79 176 176s-79 176-176 176S80 305 80 208 159 32 256 32zm224 448H32V320h48.9c16.6 25.8 38.6 47.7 64.6 64H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-41.5c26-16.3 48-38.2 64.6-64H480v160z"></path>
                </svg>
              </div>
              <div className="MuiListItemText-root">
                <span>Donate</span>
              </div>
            </Link>
            <Link to="/collection" onClick={handleCloseBar} className={cx('bar')}>
              <div className={cx('layout_icon')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v296zm96-32c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
                </svg>
              </div>
              <div className="MuiListItemText-root">
                <span>Bộ sưu tập</span>
              </div>
            </Link>
            <Link to="/" onClick={handleLogout} className={cx('bar')}>
              <div className={cx('layout_icon')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"></path>
                </svg>
              </div>
              <div className="MuiListItemText-root">
                <span>Đăng xuất</span>
              </div>
            </Link>
          </>
        )) || (
          <div style={{ padding: '15px 0 0 15px' }} onClick={handleCloseBar}>
            <Link class="button is-primary btn-login" rel="nofollow" to="/login">
              Đăng nhập
            </Link>
          </div>
        )}
        <hr className="MuiDivider-root"></hr>
        {/* <Link className={cx('bar')}>
          <div className="MuiListItemText-root">
            <span>Phim hot</span>
          </div>
        </Link> */}
        <Link
          to="/top"
          className={cx('bar')}
          onClick={() => {
            handleCloseBar();
          }}
        >
          <div className="MuiListItemText-root">
            <span>Phim hot</span>
          </div>
        </Link>
        <Link
          to="/movies/single"
          className={cx('bar')}
          onClick={() => {
            handleCloseBar();
          }}
        >
          <div className="MuiListItemText-root">
            <span>Phim lẻ</span>
          </div>
        </Link>
        <Link
          to="/movies/series"
          className={cx('bar')}
          onClick={() => {
            handleCloseBar();
          }}
        >
          <div className="MuiListItemText-root">
            <span>Phim bộ</span>
          </div>
        </Link>
        <Link
          to="/movies/new"
          className={cx('bar')}
          onClick={() => {
            handleCloseBar();
          }}
        >
          <div className="MuiListItemText-root">
            <span>Phim mới</span>
          </div>
        </Link>
        <Link to="/faqs" onClick={handleCloseBar} className={cx('bar')}>
          <div className="MuiListItemText-root">
            <span>FAQs</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Bars;
