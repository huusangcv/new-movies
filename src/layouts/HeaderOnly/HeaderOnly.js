import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import BackDrop from '../BackDrop';
import Bars from '../OverlayBars';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const HeaderOnly = ({ children }) => {
  return (
    <div className={cx('wapper')}>
      <Header />
      <BackDrop />
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
  );
};

export default HeaderOnly;
