import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import Footer from '../Footer';
import Bars from '../OverlayBars';
import { memo } from 'react';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wapper')}>
      <Header />
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>{children}</div>
          </div>
        </div>
      </section>
      <Bars />
      <Footer />
    </div>
  );
};

export default memo(DefaultLayout);
