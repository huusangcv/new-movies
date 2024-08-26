import Header from '../Header';
import classNames from 'classnames/bind';
import styles from '../DefaultLayout/DefaultLayout.module.scss';
import Footer from '../Footer';
import Bars from '../OverlayBars';
import BackDrop from '../Backdrop';

const cx = classNames.bind(styles);

const HeaderOnly = ({ children }) => {
  return (
    <div className={cx('wapper')}>
      <Header />
      <BackDrop />
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

export default HeaderOnly;
