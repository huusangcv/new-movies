import Filter from '../Filter';
import Header from '../Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wapper')}>
      <Header />
      <section className={cx('section')}>
        <div className={cx('container')}>
          <div className={cx('inner')}>
            <Filter />
            <div className={cx('content')}>{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefaultLayout;
