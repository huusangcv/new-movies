import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import BackDrop from '../BackDrop';
import Bars from '../OverlayBars';
import styles from './Header.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const HeaderOnlyForDetail = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    (isLoading && <div>Loading...</div>) || (
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
    )
  );
};

export default HeaderOnlyForDetail;
