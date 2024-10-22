import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import Footer from '../Footer';
import Bars from '../OverlayBars';
import { memo } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    toast.warn('Trang web đang trong quá trình phát triển!');
  }
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
      <div className="main-toastify">
        <ToastContainer
          position="botom-right"
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
      </div>
      <Footer />
    </div>
  );
};

export default memo(DefaultLayout);
