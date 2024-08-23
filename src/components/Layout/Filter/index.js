import styles from './Filter.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Filter = () => {
  return (
    <div className={cx('wapper')}>
      <div className={cx('filter')}>Filter</div>
    </div>
  );
};

export default Filter;
