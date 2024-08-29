/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);
const Modal = ({ isShowModalTrailer, onClickCloseTrailers, trailer }) => {
  console.log({ trailer });
  return (
    <>
      {isShowModalTrailer && (
        <div className={cx('modal-root')}>
          <div className={cx('modal', 'is-active')}>
            <div className={cx('modal-content')}>
              <div className={cx('embed-responsive')} style={{ width: 1000, maxWidth: '100%' }}>
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${trailer.replace(
                    'https://www.youtube.com/watch?v=',
                    '',
                  )}?autoplay=1&muted=1`}
                  frameborder="0"
                  allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <button
              className={cx('modal-close', ' is-large')}
              aria-label="close"
              onClick={onClickCloseTrailers}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
