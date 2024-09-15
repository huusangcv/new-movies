import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import Footer from '../Footer';
import Bars from '../OverlayBars';
import { memo } from 'react';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </div>
  );
};

export default memo(DefaultLayout);
