import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import Bars from '../OverlayBars';
import styles from './HeaderOnlyForMovies.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const HeaderOnlyForMovies = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    (isLoading && <div>Loading...</div>) || (
      <div className={cx('wapper')}>
        <Header />
        <section className={cx('section')}>
          <div className={cx('container')} style={{ flex: 1, width: '100%' }}>
            <div className={cx('inner')}>
              <div className={cx('content')}>{children}</div>
            </div>
          </div>
        </section>
        <Bars />
        <Footer />
      </div>
    )
  );
};

export default HeaderOnlyForMovies;
