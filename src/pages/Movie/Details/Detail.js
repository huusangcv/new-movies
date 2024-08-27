import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

const MovieDetails = () => {
  return (
    <div className={cx('wapper')}>
      <div className={cx('details')}>
        <div className={cx('column', 'is-one-quarter-tablet')}>
          <p className={cx('cover', 'has-text-centered')}>
            <img src="https://image.tmdb.org/t/p/w342/x8QdSeTe02X8f1EcO7yk90lTGNi.jpg" alt="" />
          </p>
          <a className={cx('watch', 'button', 'is-danger', 'is-medium', 'is-fullwidth')} href="/watch/46883">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
            Xem phim
          </a>
        </div>
        <div className={cx('column', 'main')}>
          <h1 className={cx('title')}>Handsome Guys</h1>
          <h2 className={cx('subtitle')}>
            Đẹp Trai Thấy Sai Sai (<a href="/year/2024">2024</a>)
          </h2>
          <div className={cx('meta')}>
            <span>1 giờ 41 phút</span>
          </div>
          <div className={cx('meta')}>
            <span className={cx('imdb-icon')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                  fill="#ffc107"
                ></path>
                <path
                  d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                  fill="#263238"
                ></path>
              </svg>
            </span>
            <span className={cx('has-text-weight-bold')}>6.9</span>
          </div>

          <div className={cx('level', 'genres')}>
            <div className={cx('level-left')}>
              <div className={cx('level-item')}>
                <div
                  href="https://www.facebook.com/sharer/sharer.php?u=https://xemphim.in/movie/handsome-guys~46883"
                  className={cx('fb-share', 'button', 'is-link')}
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                  </svg>
                  Chia sẻ
                </div>
              </div>
              {/* <div className={cx('level-item')}>
                <div className={cx('dropdown', 'is-hoverable')}>
                  <div className={cx('dropdown-trigger')}>
                    <button className={cx('collection-btn', 'button')}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                      </svg>
                      Bộ sưu tập
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content has-text-left">
                      <a href="#" className="dropdown-item">
                        Thêm vào danh sách phim <strong>Đã Xem</strong>
                      </a>
                      <a href="#" className="dropdown-item">
                        Thêm vào danh sách phim <strong>Muốn xem</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="level-right">
              <div className="level-item buttons">
                <a className="button is-link is-small is-rounded is-inverted is-outlined" href="/genre/kinh-di">
                  Kinh dị
                </a>
                <a className="button is-link is-small is-rounded is-inverted is-outlined" href="/genre/hai">
                  Hài
                </a>
              </div>
            </div>
          </div>

          <dl className={cx('horizontal-dl')}>
            <dt>Đạo diễn</dt>
            <dd className={cx('csv')}>
              <a href="/person/nam-dong-hyub~173099">Nam Dong-hyub</a>
            </dd>
            <dt>Quốc gia</dt>
            <dd className={cx('csv')}>
              <a href="/country/KR">Hàn Quốc</a>
            </dd>
            <dt>Khởi chiếu</dt>
            <dd>6/26/2024</dd>
          </dl>

          <div className={cx('has-text-grey-light')}>
            Hai người đàn ông thô lỗ nhưng giản dị, tự xưng là 'Những anh chàng đẹp trai'. Họ có ước mơ được sống ở vùng
            nông thôn và cuối cùng giấc mơ của họ đã thành hiện thực. Tuy nhiên, vào ngày đầu tiên chuyển đến ngôi nhà
            mới, một bí mật bị phong ấn dưới tầng hầm của họ đã được đánh thức. Từ đây gây ra một loạt những hài kịch
            khó đỡ.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
