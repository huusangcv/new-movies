import classNames from 'classnames/bind';
import Header from '../Header';
import Bars from '../OverlayBars';
import styles from './HeaderOnlyForMovies.module.scss';

const cx = classNames.bind(styles);

const HeaderOnlyForMovies = ({ children }) => {
  return (
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
    </div>
  );
};

export default HeaderOnlyForMovies;
