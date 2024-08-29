import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import Bars from '../OverlayBars';
import { Outlet } from 'react-router-dom';
import { memo } from 'react';

const cx = classNames.bind(styles);

const DefaultLayout = () => {
  console.log('Home render');
  return (
    <div className={cx('wapper')}>
      <Header />
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      {/* <Modal /> */}
      <Bars />
      <Footer />
    </div>
  );
};

export default memo(DefaultLayout);
