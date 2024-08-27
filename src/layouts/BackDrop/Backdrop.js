import classNames from 'classnames/bind';
import styles from './Backdrop.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const BackDrop = () => {
  const movie = useSelector((state) => state.movie.item);
  return (
    <div className={cx('wapper')}>
      <div
        className={cx('backdrop')}
        style={{ backgroundImage: `url(https://img.ophim.live/uploads/movies/${movie?.poster_url})` }}
      ></div>
    </div>
  );
};

export default BackDrop;
