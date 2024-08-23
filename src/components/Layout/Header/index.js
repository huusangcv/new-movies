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
          <div className={cx('navbar-item')}>
            <Link className={cx('logo-text')}>NewMoives</Link>
          </div>
        </div>
        <div className={cx('navbar-menu')}>
          <div className={cx('navbar-start')}>
            <div className={cx('navbar-item')}>
              <div className={cx('navbar-link')}>Phim Hot</div>
            </div>
            <div className={cx('navbar-item')}>
              <div className={cx('navbar-link')}>Phim lẻ</div>
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
