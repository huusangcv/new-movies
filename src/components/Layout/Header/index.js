import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBackground('#401a70');
      } else {
        setBackground('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className={cx('wapper')}>
      <nav className={cx('navbar')} style={{ background: background && background }}>
        <div className={cx('navbar-brand')}>
          <div className={cx('navbar-item', 'brand')}>
            <Link className={cx('logo-text')} to="/">
              NewMoives
            </Link>
          </div>
        </div>
        <div className={cx('navbar-menu')}>
          <div className={cx('navbar-start')}>
            <div className={cx('navbar-item')}>
              <div className={cx('navbar-link')}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                  </svg>
                  Tim kiếm
                </span>
              </div>
            </div>
            <div className={cx('navbar-item')}>
              <Link className={cx('navbar-link')} to="">
                <span>Phim Hot</span>
              </Link>
            </div>
            <div className={cx('navbar-item')}>
              <Link className={cx('navbar-link')} to="/movies/single">
                Phim lẻ
              </Link>
            </div>
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
