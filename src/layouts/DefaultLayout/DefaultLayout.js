import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../Header';
import Filter from '../Filter';
import Footer from '../Footer';
import Bars from '../OverlayBars';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wapper')}>
      <Header />
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <Filter />
            <div className={cx('content')}>{children}</div>
          </div>
        </div>
      </section>
      <Bars />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
