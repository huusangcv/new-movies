import classNames from 'classnames/bind';
import styles from './Backdrop.module.scss';
const cx = classNames.bind(styles);
const BackDrop = () => {
  return (
    <div className={cx('wapper')}>
      <div className={cx('backdrop')}></div>
    </div>
  );
};

export default BackDrop;
