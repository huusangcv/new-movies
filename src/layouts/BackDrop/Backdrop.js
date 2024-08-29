/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import styles from './Backdrop.module.scss';

const cx = classNames.bind(styles);

const BackDrop = ({ poster_url }) => {
  return (
    <div className={cx('wapper')}>
      <div
        className={cx('backdrop')}
        style={{ backgroundImage: `url(https://img.ophim.live/uploads/movies/${poster_url})` }}
      ></div>
    </div>
  );
};

export default BackDrop;
